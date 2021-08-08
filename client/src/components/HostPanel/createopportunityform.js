/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from "react";
import {Form} from "react-bootstrap"

import { Link } from "react-router-dom";
import { login as authUser, login } from "../../services/auth";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import validator from "validator";
import executeTostr from "../../containers/common/tostrMsg/TostrComponent";

import loginImg from "../../assets/images/login-img.png";

import { createOpportunity } from "../../services/host";
import { defaulSuccessMsgs as Messages } from "../../utils/messages";
import registerYatriBG from "../../assets/vectors/register-bg.svg";
import registerHostBG from "../../assets/vectors//register-bg-light.svg";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Navbar from "../../components/Navbar/Navbar";
import FormInput from "./../../utils/FormInput";





import fbLogin from "../../assets/buttons/fb-login.png";
import googleLogin from "../../assets/buttons/google-login.png";

import useInput from "./../../utils/useInput";

import { GoogleLogin, GoogleLogout } from "react-google-login";
import { refreshTokenSetup } from "../../containers/common/refreshToken";
import "./CreateOpportunity.scss";

const CreateOpportunity = ({ match: { params }, history }) => {
	// console.log("props : ", props);
	useEffect(() => window.scrollTo(0, 0), [])
	
	const [placeName, setPlaceName] = useState("");
	const [positionDescription, setPositionDescription] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [pincode, setPincode] = useState("");
	const [images, setImages] = useState([]);

	const submit = async (e) => {
		e.preventDefault();
		e.stopPropagation();

		try {
			// const place = new FormData();

			// for(let i=0; i<images.length; i++) {
			// 	place.append('place', images[i])
			// }

			const opportunity = await createOpportunity(
				placeName,
                positionDescription,
                city,
                state,
                pincode,
                images
			);
			// console.log("opportunity : ", opportunity);
			if (opportunity && !opportunity.data) {
				executeTostr(Messages.createOpportunityFail, { type: "error" });
				return false;
			} else if (opportunity && opportunity.status === 401) {
                executeTostr(opportunity.data.message, { type: "error" });
            } else if (opportunity && opportunity.data && !opportunity.data.success) {
                executeTostr(Messages.createOpportunityFail, { type: "error" })
            } else if (opportunity && opportunity.data && opportunity.data.success) {
                executeTostr(Messages.createOpportunitySuccess, {type: "success"})
            }
		} catch (error) {
			executeTostr(error.message, { type: "error" })
			// SetSpinner(false);
		}
	};

	useEffect(() => window.scrollTo(0, window.innerHeight / 2), []);

	let form = (
		<React.Fragment>
			<div className="row">
				{/* <div className="p4 px-3 text-semi-bold">
					Name <span className="text-danger">*</span>
				</div> */}
				<div className="col-sm-12">
					<div className="p4 px-3 text-semi-bold">
						Title <span className="text-danger">*</span>
					</div>
					<TextInput
						name="title"
						id="title"
						autoFocus
						placeholder="Enter title here"
						required
						value={placeName}
						onChange={(e) => setPlaceName(e.target.value)}
					/>
				</div>

			</div>
			<div className="p4 px-3 text-semi-bold">
				Description <span className="text-danger">*</span>
			</div>
			<TextInput
				name="description"
				id="input-with-icon-grid"
				type="description"
				placeholder="Enter description here"
				required
				autoComplete="false"
				maxLength={1000}

				value={positionDescription}
				onChange={(e) => {
					setPositionDescription(e.target.value);
				}}
			/>
			<div className="row">
				<div className="col-sm-4">
					<div className="p4 px-3 text-semi-bold">
						City<span className="text-danger">*</span>
					</div>
					<TextInput
						name="city"
						id="city"
						placeholder="Eg: Jaipur"
						required
						value={city}
						onChange={(e) => setCity(e.target.value)}

					/>
				</div>
				<div className="col-sm-4">
					<div className="p4 px-3 text-semi-bold">
						State<span className="text-danger">*</span>
					</div>
					<TextInput
						name="state"
						id="state"
						placeholder="Eg: Rajasthan"
						required
						value={state}
						onChange={(e) => setState(e.target.value)}

					/>
				</div>
				<div className="col-sm-4">
					<div className="p4 px-3 text-semi-bold">
						Zip<span className="text-danger">*</span>
					</div>
					<TextInput
						name="zip"
						id="zip"
						placeholder="Eg: 733101"
						required
						value={pincode}
						onChange={(e) => setPincode(e.target.value)}

					/>
				</div>

			</div>
			<br></br>
			<div>
			<Form.Group controlId="formFileMultiple" className="mb-3">
				<Form.Control required type="file" multiple onChange={e => setImages(e.target.files)} />
			</Form.Group>
			</div>

			<div className="form-input-section text-center mt-5">
				<button
					type="submit"
					className={`'text-medium zoom-2 bg-color-${params.reg === "host" ? "1" : "2"
						}`}
				>
					Create
				</button>
			</div>
		</React.Fragment>
	);

	return (
		<>
			<Header notToShow={params.reg} showShadow={true} />
			<div
				className={`register-screen ${params.reg && params.reg === "host" ? "host-bg-color" : ""
					} py-5`}
			>
				<div className="container-fluid mt-5 mb-4 p-0">
					<div className="register-card">
						<div className="row no-gutters">
							<div
								className={`col-5 d-flex flex-column justify-content-center m-0 ${params.reg && params.reg === "host"
										? "green-blue-bg"
										: "yellow-bg lead"
									}`}
								style={{
									backgroundImage: `url(${params.reg && params.reg === "host"
											? registerHostBG
											: registerYatriBG
										})`,
								}}
							>
								<h1
									className={`text-semi-bold ${params.reg && params.reg === "host" ? "white" : "lead"
										}`}
								>
									{params.reg && params.reg === "host"
										? "Opportunities for yatris!"
										: "Opportunities create here!"}
								</h1>
								<p
									className={`p2 text-medium py-4 ${params.reg && params.reg === "host" ? "white" : "lead"
										}`}
								>
									{params.reg && params.reg === "host"
										? "Create an account to meet enthusiastic Yatris."
										: "Create an opportunity to finish your projects."}
								</p>
							</div>
							<div className="col-7 bg-white py-4 px-3">
								<div className="horizontal-padding">
									<h3 className="text-center lead text-semi-bold py-3">
										Create Opportunities
									</h3>

								</div>
								<ValidationForm
									// className={classes.form}
									onSubmit={submit}
									onError={(errors) => console.log(errors)}
								>
									{form}
								</ValidationForm>

							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer showShadow={true} showLinks={false} />
		</>);
};

export default CreateOpportunity;





/***
 * 
 * 
 * 
 * 
 * 
 * ************************************************************************************************************************************************************************************************************************
 * 
 * 
 * 
 * 
 * 
 */



// /* eslint-disable no-useless-escape */
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { createOpportunity } from '../../services/host'


// import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
// import validator from "validator";
// import { register } from "../../services/auth";
// import executeTostr from "../../containers/common/tostrMsg/TostrComponent";
// import { defaulSuccessMsgs as Messages } from "../../utils/messages";

// import fbLogin from "../../assets/buttons/fb-login.png";
// import googleLogin from "../../assets/buttons/google-login.png";

// import useInput from "./../../utils/useInput";
// import registerYatriBG from "../../assets/vectors/register-bg.svg";
// import registerHostBG from "../../assets/vectors//register-bg-light.svg";
// import Navbar from "./../../components/Navbar/Navbar";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
// import FormInput from "./../../utils/FormInput";
// import { Button, Form, Card, Row, Col } from "react-bootstrap";
// import { ToastContainer, toast } from "react-toastify";

// import { useDispatch } from "react-redux";
// // import { register } from "../../redux/actions/auth";

// const CreateOpportunity = () => {

//     const [placeName, setplaceName] = useState("");
//     const [positionDescription, setpositionDescription] = useState("");
//     const [city, setCity] = useState("");
//     const [state, setState] = useState("");
//     const [pincode, setPincode] = useState("");
//     const [place, setPlace] = useState([]);

//     const submit = async (e) => {
// 		e.preventDefault();
// 		e.stopPropagation();

// 		try {
// 			const opportunity = await createOpportunity(
// 				placeName,
//                 positionDescription,
//                 city,
//                 state,
//                 pincode,
//                 place
// 			);
// 			// console.log("opportunity : ", opportunity);
// 			if (opportunity && !opportunity.data) {
// 				executeTostr(Messages.createOpportunityFail, { type: "error" });
// 				return false;
// 			} else if (opportunity && opportunity.status === 401) {
//                 executeTostr(opportunity.data.message, { type: "error" });
//             } else if (opportunity && opportunity.data && !opportunity.data.success) {
//                 executeTostr(Messages.createOpportunityFail, { type: "error" })
//             } else if (opportunity && opportunity.data && opportunity.data.success) {
//                 executeTostr(Messages.createOpportunitySuccess, {type: "success"})
//             }
// 		} catch (error) {
// 			executeTostr(error.message, { type: "error" })
// 			// SetSpinner(false);
// 		}
// 	};

// 	const difftoast = () => {
// 		toast.warn("Opportunity is created Successfully!", {
// 			position: "top-center",
// 		});
// 	};
// 	const notifications = {
// 		margin: "20px 20px",
// 		display: "flex",
// 	};

// 	const search = {
// 		margin: "10px 140px",
// 	};
// 	const adminheading = {
// 		margin: "27px 25px",
// 	};
// 	const card = {
// 		margin: "0px 120px",
// 		fontWeight: "500",
// 		cursor: "pointer",
// 		webkitBoxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
// 		boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
// 		backgroundColor: "rgb(232,235,236)",
// 	};

// 	let form = (
// 		<Card
// 			style={{
// 				borderRadius: "10px",
// 				background: "#E8EBEC",
// 				marginLeft: "100px",
// 				marginRight: "120px",
// 			}}
// 		>
// 			<Form style={{ margin: "10px", padding: "20px" }} onSubmit={submit} >
// 				<Form.Group className="mb-3" controlId="formBasicEmail">
// 					<Form.Label required>Title</Form.Label>
// 					<Form.Control type="placeName" placeholder="Enter Title" onChange={e => setPlaceName(e.target.value) } />
// 				</Form.Group>

// 				<Form.Group className="mb-3" controlId="formBasicPassword">
// 					<Form.Label>Description</Form.Label>
// 					<Form.Control type="positionDescription" placeholder="Enter description" onChange={e => setPositionDescription(e.target.value) } />
// 				</Form.Group>

// 				<Row className="mb-3">
// 					<Form.Group as={Col} controlId="formGridCity">
// 						<Form.Label>City</Form.Label>
// 						<Form.Control required onChange={e => setCity(e.target.value) }/>
// 					</Form.Group>

// 					<Form.Group as={Col} controlId="formGridState">
// 						<Form.Label>State</Form.Label>
// 						<Form.Control required onChange={e => setState(e.target.value) } />
// 					</Form.Group>

// 					<Form.Group as={Col} controlId="formGridZip">
// 						<Form.Label>Zip</Form.Label>
// 						<Form.Control required onChange={e => setPincode(e.target.value) } />
// 					</Form.Group>
// 				</Row>

// 				<Form.Group controlId="formFile" className="mb-3">
// 					<Form.Control type="file" multiple onChange={e => setPlace(e.target.files) }/>
// 				</Form.Group>
// 				<Button variant="primary" onClick={difftoast} type="submit">
// 					Create Now
// 				</Button>
// 				<ToastContainer />
// 			</Form>
// 		</Card>
// 	);
// 	return (
// 		<>
// 			<Header />
// 			<Navbar />
// 			<div className="container">
// 				<div className="row text-bold no-gutters">
// 					<div className="column col col-xs-4">
// 						<Link to="hostpanel">
// 							{" "}
// 							<h4 className="text-bold lead" style={adminheading}>
// 								Host Dashboard
// 							</h4>
// 						</Link>
// 					</div>

// 					<div className="column col col-xs-4" style={search}></div>
// 					<div className="column col col-xs-4" style={notifications}>
// 						<Link className="nav-link" to="/hostnotification">
// 							Notifications &nbsp;
// 						</Link>

// 						<Link className="nav-link" to="dsfsd#">
// 							Profile &nbsp; &nbsp;
// 						</Link>

// 						<Link to="/login">
// 							<button type="button" className="btn btn-logout zoom-2">
// 								<span className="text-bold">Logout</span>
// 							</button>
// 						</Link>
// 					</div>
// 				</div>
// 			</div>
// 			<div>{form}</div>

// 			<br></br>
// 			<br></br>
// 			<br></br>
// 			<Footer />
// 		</>
// 	);
// };

// export default CreateOpportunity;
