import { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { isTablet, isMobile } from "react-device-detect";
import ProtectedRoute from "./global/ProtectedRoute";

import "./app.scss";

import HomeScreen from "./screens/HomeScreen/HomeScreen";
import GettingStartedScreen from "./screens/GettingStarted/GettingStartedScreen";
import PlanYourTripScreen from "./screens/PlanYour/PlanYourTripScreen";
import BlogScreen from "./screens/Blog/BlogScreen";
import LoginScreen from "./screens/Auth/LoginScreen";
import RegisterScreen from "./screens/Auth/RegisterScreen";
import NotFoundScreen from "./screens/Extra/NotFoundScreen";
import PricingScreen from "./screens/PlanYour/PricingScreen";
import HelpScreen from "./screens/Help/HelpScreen";
import InfoHost from "./screens/Info/InfoHost";
import InfoYatri from "./screens/Info/InfoYatri";
import OppurtunityScreen from "./screens/Opputunity/OppurtunityScreen";
import SingleOppurtunity from "./screens/Opputunity/SingleOppurtunity";
import Dashboard from "./screens/Dashboard/Dashboard";
import About from "./screens/About/About";
import Admin from "./screens/Admin/Admin";
import Adminyatridetails from "./components/featuredInfo/Adminyatridetails";
import Adminhostdetails from './components/featuredInfo/Adminhostdetails'
import RecentActivity from "./components/featuredInfo/recentactivity";
import YatriDetails from "./components/featuredInfo/YatriDetails";
import HostDetails from "./components/featuredInfo/HostDetails";
import Notification from './components/featuredInfo/notification'
import HostDashboard from "./components/HostPanel/hostdashboard";
import HostPanel from "./screens/Host/HostPanel";
import HostNotification from "./components/HostPanel/hostnotification";
import CreateOpportunity from "./components/HostPanel/createopportunityform";
import HostProfile from "./components/HostPanel/profilePage";
import Allhostprofile from "./components/featuredInfo/allhostprofile";

const App = () => {
	useEffect(() => {
		const meta = document.querySelector('meta[name="viewport"]');
		if (isTablet) {
			if (window.matchMedia("(orientation: portrait)").matches)
				meta.setAttribute("content", "width=device-width, initial-scale=0.5");
			else if (window.matchMedia("(orientation: landscape)").matches)
				meta.setAttribute("content", "width=device-width, initial-scale=0.88");
		}
		if (isMobile) {
			if (window.matchMedia("(orientation: portrait)").matches)
				meta.setAttribute("content", "width=device-width, initial-scale=0.25");
			else if (window.matchMedia("(orientation: landscape)").matches)
				meta.setAttribute("content", "width=device-width, initial-scale=0.54");
		}
	}, []);

	return (
		<Suspense
			fallback={
				<div className="loader-div d-flex justify-content-center align-items-center">
					Loading...
				</div>
			}
		>
			<Router>
				<div className="page-wrapper">
					<Switch>
						<Route exact path="/" component={HomeScreen} />
						<Route exact path="/login" component={LoginScreen} />
						<Route exact path="/register/:reg" component={RegisterScreen} />
						<Route
							exact
							path="/getting-started"
							component={GettingStartedScreen}
						/>
						<Route exact path="/pricing" component={PricingScreen} />
						<Route exact path="/info/host" component={InfoHost} />
						<Route exact path="/info/yatri" component={InfoYatri} />
						<Route
							exact
							path="/travel-oppurtunities"
							component={OppurtunityScreen}
						/>
						<Route
							exact
							path="/travel-oppurtunities/:placeId"
							component={SingleOppurtunity}
						/>
						<Route path="/help" component={HelpScreen} />
						<Route path="/plan-your-trip" component={PlanYourTripScreen} />
						<Route path="/blogs" component={BlogScreen} />
						<Route path="/aboutus" component={About} />
						<Route path="/admin" component={Admin} />
						<Route path="/allyatridetails" component={Adminyatridetails} />
						<Route path="/allhostdetails" component={Adminhostdetails} />
						<Route path="/recentactivity" component={RecentActivity} />
						<Route path="/yatriactivity" component={YatriDetails} />
						<Route path="/hostactivity" component={HostDetails} />
						<Route path="/hostpanel" component={HostPanel} />
						<Route path="/hostnotification" component={HostNotification} />
						<Route exact path="/createopportunity" component={CreateOpportunity}/>
						<Route exact path="/hostprofile" component={HostProfile}/>
						<Route exact path="/hostprofile/:id" component={Allhostprofile}/>
						
						<Route exact path="/adminnotification" component={Notification}/>
						<ProtectedRoute path="/dashboard" component={Dashboard} />
						<Route component={NotFoundScreen} />
					</Switch>
				</div>
			</Router>
		</Suspense>
	);
};

export default App;
