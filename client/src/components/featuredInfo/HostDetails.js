import { lazy, useEffect, useState } from 'react'
import { getHostsCount, getDeletedHostsCount, getTotalOpportunities } from '../../services/admin';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import "./HostDetails.scss";
import FeaturedInfo from './FeaturedInfo';

import executeTostr from "../../containers/common/tostrMsg/TostrComponent";

const adminheading={
margin:'37px 35px'
}

const HostDetails = () => {

   const [hosts, setHosts] = useState(0);
   const [totalOpportunity, setTotalOpportunity] = useState(0);
   const [deletedHosts, setDeletedHosts] = useState(0);

   useEffect(() => {
      const fetchCounts = async () => {
			const hostCount = await getHostsCount();

			if (hostCount && !hostCount.data) {
				executeTostr("Server error", { type: "error" });
			} else if (hostCount && hostCount.status === 401) {
				executeTostr(hostCount.data.message, { type: "error" });
			} else if (hostCount && hostCount.data && !hostCount.data.success) {
				executeTostr(hostCount.data.data.err);
			} else if (hostCount && hostCount.data && hostCount.data.success) {
				setHosts(hostCount.data.data.count);
			}

         const hostDeletedCount = await getDeletedHostsCount();

			if (hostDeletedCount && !hostDeletedCount.data) {
				executeTostr("Server error", { type: "error" });
			} else if (hostDeletedCount && hostDeletedCount.status === 401) {
				executeTostr(hostDeletedCount.data.message, { type: "error" });
			} else if (hostDeletedCount && hostDeletedCount.data && !hostDeletedCount.data.success) {
				executeTostr(hostDeletedCount.data.data.err);
			} else if (hostDeletedCount && hostDeletedCount.data && hostDeletedCount.data.success) {
				setDeletedHosts(hostDeletedCount.data.data.count);
			}
         
         const totalOppo = await getTotalOpportunities();

			if (totalOppo && !totalOppo.data) {
				executeTostr("Server error", { type: "error" });
			} else if (totalOppo && totalOppo.status === 401) {
				executeTostr(totalOppo.data.message, { type: "error" });
			} else if (totalOppo && totalOppo.data && !totalOppo.data.success) {
				executeTostr(totalOppo.data.data.err);
			} else if (totalOppo && totalOppo.data && totalOppo.data.success) {
				setTotalOpportunity(totalOppo.data.data.count);
			}
		};

      fetchCounts();
   }, [])

return (
<>
<Header />
<Navbar />

<div className='container'>
   <div className='row text-bold no-gutters'>
      <div className='column col col-xs-4' >
         <h4 className='text-bold lead' style={adminheading}>
            Host Activities
         </h4>
      </div>
   </div>
</div>
<div className='container'>
   <div className="featured">
      <div className="featuredItem">
         <span className="featuredTitle">Total Accounts of Host</span>
         <div className="featuredMoneyContainer">
            <span className="featuredMoney">{hosts}</span>
         </div>
      </div>
      <div className="featuredItem">
         <span className="featuredTitle">Total Opportunities</span>
         <div className="featuredMoneyContainer">
            <span className="featuredMoney">{totalOpportunity}</span>
         </div>
      </div>
      <div className="featuredItem">
         <span className="featuredTitle">Recent Opportunities</span>
         <div className="featuredMoneyContainer">
            <span className="featuredMoney">{totalOpportunity}</span>
         </div>
      </div>
   </div>
   <br></br>
</div>
<div className='container'>
   <div className="featured">

      <div className="featuredItem">
         <span className="featuredTitle">Deleted Accounts</span>
         <div className="featuredMoneyContainer">
            <span className="featuredMoney">{deletedHosts}</span>
         </div>
      </div>
   
   </div>
</div>
<br></br>
<br></br>

<br></br>
<Footer />
</>
)
}
export default HostDetails