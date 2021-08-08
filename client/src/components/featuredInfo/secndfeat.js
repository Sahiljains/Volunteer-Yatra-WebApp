import { Link } from 'react-router-dom';
import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Route, Switch } from 'react-router-dom'
import Rectangle from 'react-rectangle';


import Adminyatridetails from "./Adminyatridetails";

import searchIcon from '../../assets/vectors/search-icon.png';
import "./featuredInfo.css";
import FeatureInfo from './featureinfo';

function Secndfeat() {
  return (
 
    
        <div className="featured">
             <div className="featuredItem" >
             <Link to='/allyatridetails'><span className="featuredTitle">All Yatri Details</span></Link>
               
              </div>
              
        
              <div className="featuredItem">
                <span className="featuredTitle">Traffic</span>
                <div className="featuredMoneyContainer">
                  <span className="featuredMoney"> % </span>
                </div>
              </div>
        
              <div className="featuredItem">
              <Link to='/allhostdetails'> <span className="featuredTitle">All Host Details</span></Link>
                
              </div>
              
            </div>

    
	
);
}
export default Secndfeat
