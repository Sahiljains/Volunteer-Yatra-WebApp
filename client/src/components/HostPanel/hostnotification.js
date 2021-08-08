import { Link } from 'react-router-dom';
import React from "react";
import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import Navbar from "./../../components/Navbar/Navbar";
import { Route, Switch } from 'react-router-dom'
import Rectangle from 'react-rectangle';
import { Card, Button, Row, Col, CardGroup } from 'react-bootstrap'


import Adminyatridetails from "../../components/featuredInfo/Adminyatridetails";

import searchIcon from '../../assets/vectors/search-icon.png';


const notifications = {
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


function HostNotification() {
    return (
        <>
            <Header />
            <Navbar />

            <div className='container'>
                <div className='row text-bold no-gutters'>
                    <div className='column col col-xs-4' >
                    <Link to='hostpanel'> <h4 className='text-bold lead' style={adminheading}>
                            Host Dashboard
                        </h4></Link>
                    </div>



                    <div className='column col col-xs-4' style={search}>

                    </div>
                    <div className='column col col-xs-4' style={notifications} >
                        <Link className='nav-link' to='/hostnotification' >
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

            <Card style={card}>

                <Card.Body>

                    <Card.Text>
                    Swarup Sarkar has applied as a yatri on your Rajasthan opportunity just now.
                        <br></br>
                        {new Date(). toLocaleString() + ""}
                    </Card.Text>
                </Card.Body>


            </Card>

            <Card style={card}>

                <Card.Body>

                    <Card.Text>
                        Swarup Sarkar has applied as a yatri on your Rajasthan opportunity just now.
                        <br></br>
                        {new Date(). toLocaleString() + ""}
                    </Card.Text>
                </Card.Body>


            </Card>

            <Card style={card}>

                <Card.Body>

                    <Card.Text>
                    Swarup Sarkar has applied as a yatri on your Rajasthan opportunity just now.
                        <br></br>
                        {new Date(). toLocaleString() + ""}
                    </Card.Text>
                </Card.Body>


            </Card>
            <Card style={card}>

                <Card.Body>

                    <Card.Text>
                    Swarup Sarkar has applied as a yatri on your Rajasthan opportunity just now.
                        <br></br>
                        20th July,2021
                    </Card.Text>
                </Card.Body>


            </Card>

            <Card style={card}>

                <Card.Body>

                    <Card.Text>
                    Swarup Sarkar has applied as a yatri on your Rajasthan opportunity just now.
                        <br></br>
                        20th July,2021
                    </Card.Text>
                </Card.Body>


            </Card>
            <Card style={card}>

                <Card.Body>

                    <Card.Text>
                    Swarup Sarkar has applied as a yatri on your Rajasthan opportunity just now.
                        <br></br>
                        20th July,2021
                    </Card.Text>
                </Card.Body>


            </Card>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </>




    );
}
export default HostNotification
