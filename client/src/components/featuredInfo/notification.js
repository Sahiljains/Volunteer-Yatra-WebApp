import { Link } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react'
import { getNotifications } from '../../services/admin';
import React from "react";
import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import Navbar from "./../../components/Navbar/Navbar";
import Moment from 'react-moment';
import { Route, Switch } from 'react-router-dom'
import Rectangle from 'react-rectangle';
import { Card, Button, Row, Col, CardGroup } from 'react-bootstrap'


import executeTostr from "../../containers/common/tostrMsg/TostrComponent";
import Adminyatridetails from "../../components/featuredInfo/Adminyatridetails";

import searchIcon from '../../assets/vectors/search-icon.png';

function Notification() {

    const notification = {
        margin: '20px 20px',
        display: 'flex',
    }
    
    const search = {
        margin: '10px 140px',
    }
    const adminheading = {
        margin: '27px 25px'
    
    }
    const card = {
        margin: '0px 120px',
        fontWeight: '500',
        cursor: 'pointer',
        webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',
        backgroundColor: 'rgb(232,235,236)'
    }
    
    

    const [notifications, setNotifications] = useState([]);

    const renderNotifications = (notifications, index) => {
        return (
            <Card style={card}>
                <Card.Body>
                    <Card.Text>
                        { `${notifications.name} (${notifications.role}) -> ${notifications.type}` }
                        <br></br>
                        <Moment>{notifications.updatedAt}</Moment>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }    

    useEffect(() => {
        const fetchNotifications = async() => {
            const response = await getNotifications();

            if (response && !response.data) {
                executeTostr("Server error", { type: "error" });
            } else if (response && response.status === 401) {
                executeTostr(response.data.message, { type: "error" });
            } else if (response && response.data && !response.data.success) {
                executeTostr(response.data.data.err)
            }else if (response && response.data && response.data.success) {
                setNotifications(response.data.data.notifications);
            }
        }

        fetchNotifications()
    }, [])


    return (
        <>
            <Header />
            <Navbar />

            <div className='container'>
                <div className='row text-bold no-gutters'>
                    <div className='column col col-xs-4' >
                    <Link to='admin'> <h4 className='text-bold lead' style={adminheading}>
                            Admin Dashboard
                        </h4></Link>
                    </div>

                    <div className='column col col-xs-4' style={search}>
                    </div>
                    
                    <div className='column col col-xs-4' style={notification} >
                        <Link className='nav-link' to='/adminnotification' >
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

            {
                notifications.map(renderNotifications)
            }

            <br></br>
            <br></br>
            <br></br>
            
            <Footer />
        </>




    );
}
export default Notification
