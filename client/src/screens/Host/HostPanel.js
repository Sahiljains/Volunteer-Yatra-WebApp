import { Route, Switch } from 'react-router-dom'

import Popular from './../../components/Blog/Popular'

import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import Navbar from './../../components/Navbar/Navbar'
import FeaturedInfo from './../../components/featuredInfo/FeaturedInfo'
import Adminyatridetails from '../../components/featuredInfo/Adminyatridetails'
import Adminhostdetails from '../../components/featuredInfo/Adminhostdetails'
import RecentActivity from '../../components/featuredInfo/recentactivity'
import Notification from '../../components/featuredInfo/notification'
import HostDashboard from '../../components/HostPanel/hostdashboard'
import CreateOpportunity from '../../components/HostPanel/createopportunityform'



const HostPanel = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path='/hostpanel' component={HostDashboard} />
      
        <Route exact path="/adminnotification" component={Notification}/>
        <Route exact path="/createopportunity" component={CreateOpportunity}/>
     
  
        
        

  
       
        
      </Switch>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    
      <Footer />
    </>
  )
}

export default HostPanel
