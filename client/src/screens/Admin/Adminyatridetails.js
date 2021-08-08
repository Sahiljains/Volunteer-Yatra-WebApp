import { lazy, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllYatriDetails } from '../../services/admin'

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

const Adminyatridetails = () => {
    useEffect(() => window.scrollTo(0, 0), [])

    const [ yatris, setYatris ] = useState([]);

    useEffect(() => {

        const fetchYatris = async() => {

            const response = await getAllYatriDetails();

            if (response && !response.data) {
                executeTostr("Server error", { type: "error" });
            } else if (response && response.status === 401) {
                executeTostr(response.data.message, { type: "error" });
            } else if (response && response.data && !response.data.success) {
                executeTostr(response.data.data.err)
            }else if (response && response.data && response.data.success) {
                setYatris(response.data.data.yatris);
            }
        }

        fetchYatris()
    }, [])

    const renderYatris = (yatris, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{yatris.firstName}</td>
                <td>{yatris.lastName}</td>
                <td>{yatris.email}</td>
                <td>{yatris.age ? yatris.age : "-"}</td>
                <td>{yatris.gender ? yatris.gender : "-"}</td>
                <td>{yatris.mobileNo ? yatris.mobileNo : "-" }</td>
                <td>{yatris.status ? yatris.status : "-"}</td>
            </tr>
        )
    }
    const tblatyle={
        margin: '50px'
    }

    return (
        <>
            <Header />
            <Navbar />
            <div className="tbl" style={tblatyle}>
                <ReactBootStrap.Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sl. No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Address</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Mobile No.</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {yatris.map(renderYatris)}

                    </tbody>
                </ReactBootStrap.Table>
            </div>

            <Footer />


        </>
    )
}

export default Adminyatridetails