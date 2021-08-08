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
import FeatureInfo from './featureinfo';
import Secndfeat from './secndfeat'




const notifications ={
    margin:'20px 20px',
    display:'flex',
    
   }

 const search={
     margin:'10px 140px',
 }
 const adminheading={
     margin:'27px 25px'

 }



function FeaturedInfo() {
  return (
 
             <div className='container'>
                <div className='row text-bold no-gutters'>
                    <div className='column col col-xs-4' >
                        <h4 className='text-bold lead' style={adminheading}>
                            Admin Dashboard
                        </h4>
                    </div>
                   
                  

                    <div className='column col col-xs-4' style={search}>
                        
                    </div>
                    <div className='column col col-xs-4' style={notifications} >
                        <Link className='nav-link' to='adminnotification' >
                        Notifications &nbsp;
                        </Link>
                   
                        <Link className='nav-link' to='dsfsd#' >
                        Profile &nbsp;
                        &nbsp;
                        </Link>
                    
                        <Link to="/login">
                                <button type="button" className="btn btn-logout zoom-2">
                                 <span className="text-bold">Logout</span>
                                </button>
                        </Link>
                    </div>


                </div>
    <FeatureInfo/>
    <br></br>
    <Secndfeat/>
    </div>


    
	
  );
}
export default FeaturedInfo
