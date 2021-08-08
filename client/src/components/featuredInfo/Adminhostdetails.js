import { lazy, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllHostDetails } from '../../services/admin';

import PageConnect from '../../components/layout/PageConnect'
import landingBG from '../../assets/images/bg.png'
import landingText from '../../assets/images/main-title-img.png'
import travelpng from '../../assets/images/travel-text.png'
import langingImgButton from '../../assets/buttons/community_button.png'
import communityButtonBlue from '../../assets/buttons/community_button_blue.png'

import executeTostr from "../../containers/common/tostrMsg/TostrComponent";
import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'
import Navbar from './../../components/Navbar/Navbar'
import * as ReactBootStrap from "react-bootstrap"

const Adminhostdetails = () => {
    useEffect(() => window.scrollTo(0, 0), [])

    const [ hosts, setHost ] = useState([]);

    useEffect(() => {

        const fetchHost = async() => {

            const response = await getAllHostDetails();

            if (response && !response.data) {
                executeTostr("Server error", { type: "error" });
            } else if (response && response.status === 401) {
                executeTostr(response.data.message, { type: "error" });
            } else if (response && response.data && !response.data.success) {
                executeTostr(response.data.data.err)
            }else if (response && response.data && response.data.success) {
                setHost(response.data.data.hosts);
            }
        }

        fetchHost()
    }, [])

    const renderHosts = (hosts, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td> 
                    <Link to={`/hostprofile/${hosts.userId}`} >
                        {hosts.userId}
                    </Link> 
                </td>
                <td>{hosts.firstName}</td>
                <td>{hosts.lastName}</td>
                <td>{hosts.Address ? (`${hosts.Address.line1}, ${hosts.Address.line2}, ${hosts.Address.city}, ${hosts.Address.state}. Pincode - ${hosts.Address.pincode}`): "-"}</td>
                <td>{hosts.email}</td>
                <td>{hosts.mobileNo ? hosts.mobileNo : "-" }</td>
                <td>Total oppurtunities</td>
            </tr>
        )
    }
    const tblatyle={
        margin: '-20px 70px'
    }
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

    return (
        <>
            <Header />
            <Navbar />
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
                        <Link className='nav-link' to='sdffs' >
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
                </div>
            <div className="tbl" style={tblatyle}>
                <ReactBootStrap.Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sl. No.</th>
                            <th>ID. No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Email Address</th>
                            <th>Contact Details</th>
                            <th>Total Opportunity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hosts.map(renderHosts)}

                    </tbody>
                </ReactBootStrap.Table>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Footer />


        </>
    )
}

export default Adminhostdetails