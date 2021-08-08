import { Link } from 'react-router-dom';
import React from "react";
import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import Navbar from "./../../components/Navbar/Navbar";
import { Route, Switch } from 'react-router-dom'
import Rectangle from 'react-rectangle';


import Adminyatridetails from "../../components/featuredInfo/Adminyatridetails";

import searchIcon from '../../assets/vectors/search-icon.png';
import "./featuredInfo.css";
function FeatureInfo() {
    return (
<div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Earnings</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2,415 /-</span>
        </div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Analytics</span>
       
      </div>

      <div className="featuredItem">
      <Link to='/recentactivity'><span className="featuredTitle">Recent Activities</span></Link>
      </div>
      
    </div>
    	
  );
}
export default FeatureInfo