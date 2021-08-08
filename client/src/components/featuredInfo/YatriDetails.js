import { lazy, useEffect, useState } from 'react'
import { getYatrisCount, getDeletedYatrisCount } from '../../services/admin';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import "./YatriDetails.scss";
import FeaturedInfo from './FeaturedInfo';

import executeTostr from "../../containers/common/tostrMsg/TostrComponent";

const adminheading={
margin:'37px 35px'
}

const YatriDetails = () => {

   const [yatris, setYatris] = useState(0);
   const [deletedYatris, setDeletedYatris] = useState(0);

   useEffect(() => {
      const fetchCounts = async () => {
			const yatriCount = await getYatrisCount();

			if (yatriCount && !yatriCount.data) {
				executeTostr("Server error", { type: "error" });
			} else if (yatriCount && yatriCount.status === 401) {
				executeTostr(yatriCount.data.message, { type: "error" });
			} else if (yatriCount && yatriCount.data && !yatriCount.data.success) {
				executeTostr(yatriCount.data.data.err);
			} else if (yatriCount && yatriCount.data && yatriCount.data.success) {
				setYatris(yatriCount.data.data.count);
			}

         const yatriDeletedCount = await getDeletedYatrisCount();

			if (yatriDeletedCount && !yatriDeletedCount.data) {
				executeTostr("Server error", { type: "error" });
			} else if (yatriDeletedCount && yatriDeletedCount.status === 401) {
				executeTostr(yatriDeletedCount.data.message, { type: "error" });
			} else if (yatriDeletedCount && yatriDeletedCount.data && !yatriDeletedCount.data.success) {
				executeTostr(yatriDeletedCount.data.data.err);
			} else if (yatriDeletedCount && yatriDeletedCount.data && yatriDeletedCount.data.success) {
				setDeletedYatris(yatriDeletedCount.data.data.count);
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
            Yatri Activities
         </h4>
      </div>
   </div>
</div>
<div className='container'>
   <div className="featured">
      <div className="featuredItem">
         <span className="featuredTitle">Total Accounts of Yatri</span>
         <div className="featuredMoneyContainer">
            <span className="featuredMoney">{yatris}</span>
         </div>
      </div>
      <div className="featuredItem">
         <span className="featuredTitle">Total Applied Yatri</span>
         <div className="featuredMoneyContainer">
            <span className="featuredMoney">2,415</span>
         </div>
      </div>
      <div className="featuredItem">
         <span className="featuredTitle">Not Applied Yatri</span>
         <div className="featuredMoneyContainer">
            <span className="featuredMoney">2,415</span>
         </div>
      </div>
   </div>
   <br></br>
</div>
<div className='container'>
   <div className="yfeatured">

      <div className="yfeaturedItem">
         <span className="yfeaturedTitle">Deleted Accounts</span>
         <div className="yfeaturedMoneyContainer">
            <span className="yfeaturedMoney">{deletedYatris}</span>
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
export default YatriDetails