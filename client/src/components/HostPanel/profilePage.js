import { Link } from "react-router-dom";
import { React, useEffect, useState } from "react";
import {
	getBasicInfo,
	getPersonalInfo,
	editBasicInfo,
	editPersonalInfo,
	editBio,
	deleteAccount,
} from "../../services/profile";

import { Card } from "react-bootstrap";
import validator from "validator";

import executeTostr from "../../containers/common/tostrMsg/TostrComponent";
import Header from "./../../components/Header/Header";
import Footer from "./../../components/Footer/Footer";
import Navbar from "./../../components/Navbar/Navbar";
import pic from "../../assets/images/bg.png";
import { Form } from "react-bootstrap";
import "./profilePage.scss";
import { FaEdit } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";

const notifications = {
	margin: "20px 20px",
	display: "flex",
};

const search = {
	margin: "10px 140px",
};
const adminheading = {
	margin: "27px 25px",
};

const card = {
	margin: "0px 120px",
	fontWeight: "500",
	cursor: "pointer",
	webkitBoxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
	boxShadow: "0px 0px 15px -10px rgba(0, 0, 0, 0.75)",
};

const HostProfile = (props) => {
	const [profilePic, setProfilePic] = useState("");
	const [firstname, setFirstName] = useState("");
	const [lastname, setLastName] = useState("");
	const [id, setId] = useState("");
	const [gender, setGender] = useState("");
	const [email, setEmail] = useState("");
	const [contact, setContact] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [address, setAddress] = useState("");
	const [zip, setZip] = useState("");
	const [password, setPassword] = useState("");
	const [device, setDevice] = useState("");
	const [insta, setInsta] = useState("");
	const [facebook, setFacebook] = useState("");
	const [rating, setRating] = useState("");
	const [where, setWhere] = useState("basic");
	const [bio, setBio] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);
	useEffect(() => window.scrollTo(0, window.innerHeight / 100), []);

  useEffect(() => {
		if (isDeleted) {
			props.history.push({
				pathname: "/login",
			});
		}
	}, [isDeleted]);

	useEffect(() => {
		const fetchData = async () => {
			const basicInfo = await getBasicInfo();

			if (basicInfo && !basicInfo.data) {
				executeTostr("Server error", { type: "error" });
			} else if (basicInfo && basicInfo.status === 401) {
				executeTostr(basicInfo.data.message, { type: "error" });
			} else if (basicInfo && basicInfo.data && !basicInfo.data.success) {
				executeTostr(basicInfo.data.data.err);
			} else if (basicInfo && basicInfo.data && basicInfo.data.success) {
				setFirstName(basicInfo.data.data.basicinfo.firstName);
				setLastName(basicInfo.data.data.basicinfo.lastName);
				setGender(basicInfo.data.data.basicinfo.gender);
				setId(basicInfo.data.data.basicinfo.userId);
				setProfilePic(basicInfo.data.data.basicinfo.profilePic);
				setBio(basicInfo.data.data.basicinfo.bio);
			}

			const personalInfo = await getPersonalInfo();

			if (personalInfo && !personalInfo.data) {
				executeTostr("Server error", { type: "error" });
			} else if (personalInfo && personalInfo.status === 401) {
				executeTostr(personalInfo.data.message, { type: "error" });
			} else if (
				personalInfo &&
				personalInfo.data &&
				!personalInfo.data.success
			) {
				executeTostr(personalInfo.data.data.err);
			} else if (
				personalInfo &&
				personalInfo.data &&
				personalInfo.data.success
			) {
				setEmail(personalInfo.data.data.personalinfo.user.email);
				setContact(personalInfo.data.data.personalinfo.user.mobileNo.slice(3));
				
				if(personalInfo.data.data.personalinfo.address) {
					setAddress(personalInfo.data.data.personalinfo.address.line1);
					setCity(personalInfo.data.data.personalinfo.address.city);
					setState(personalInfo.data.data.personalinfo.address.state);
					setZip(personalInfo.data.data.personalinfo.address.pincode);
				}
			}
		};

		fetchData();
	}, []);

	const editInfo = async (e) => {
		let response;

		if (where == "basic") {
			response = await editBasicInfo(firstname, lastname, gender);
			// console.log(response)
		} else if (where == "personal") {
			response = await editPersonalInfo(contact, address, city, state, zip);
		} else if (where == "bio") {
			response = await editBio(bio);
			console.log(response);
		} else if (where == "social") {
			// Do nothing
		}

		if (response && !response.data) {
			executeTostr("Server error", { type: "error" });
		} else if (response && response.status === 401) {
			executeTostr(response.data.message, { type: "error" });
		} else if (response && response.data && !response.data.success) {
			executeTostr(response.data.data.err);
		} else if (response && response.data && response.data.success) {
			if (where == "basic")
				executeTostr("Basic Information Updated!", { type: "success" });
			if (where == "personal")
				executeTostr("Personal Information Updated!", { type: "success" });
			if (where == "bio") executeTostr("Bio Updated!", { type: "success" });
		}
	};

	const deleteUser = async () => {
		const deleteInfo = await deleteAccount();
		if (deleteInfo && !deleteInfo.data) {
			executeTostr("Server error", { type: "error" });
		} else if (deleteInfo && deleteInfo.status === 401) {
			executeTostr(deleteInfo.data.message, { type: "error" });
		} else if (deleteInfo && deleteInfo.data && !deleteInfo.data.success) {
			executeTostr(deleteInfo.data.data.err);
		} else if (deleteInfo && deleteInfo.data && deleteInfo.data.success) {
      setIsDeleted(true);
			executeTostr("User Deleted Successfully", { type: "success" });
		}
	};

	const profileform = (
		<>
			<Card style={card}>
				<Card.Body>
					<div class="cd">
						<div className="row">
							<div className="col-md-2">
								<img
									className="image"
									src={profilePic ? profilePic : pic}
								></img>
							</div>
							<br></br>
							<br></br>
							<div className="col-md-8 ">
								<h5 className="profilename">{`${firstname} ${lastname}`}</h5>
								<Form.Group className="bioo" controlId="">
									<Form.Control
										className="bi"
										rows={3}
										onChange={(e) => {
											setBio(e.target.value);
											setWhere("bio");
										}}
										value={bio}
										as="textarea"
									/>
									<h6 className="briefinfo">
										Brief description about yourself
									</h6>
								</Form.Group>
								{/* <input  type="text" class="bio">

              </input> */}
							</div>
						</div>

						<br></br>
						<br></br>

						<div className="label">
							<br></br>
							<h4>
								<span className="_1mHr1S">BASIC INFORMATION</span>
								<span className="oKZoMVVV">
									<FiEdit onClick={() => setWhere("basic")} />
								</span>
							</h4>
						</div>

						{where == "basic" ? (
							<>
								<div className="row">
									<div className="col-md-4">
										<h6 className="basicfirstname">First Name</h6>
										<input
											type="text"
											id="basicinfo1"
											class="_1w3ZZo _1YmvCG _2mFmU7"
											autoFocus
											required
											value={firstname}
											onChange={(e) => setFirstName(e.target.value)}
										/>
									</div>
									<div className="col-md-4">
										<h6 className="basiclastname">Last Name</h6>
										<input
											type="text"
											id="basicinfo2"
											class="_1w3ZZo _1YmvCG _2mFmU7"
											autoFocus
											required
											value={lastname}
											onChange={(e) => setLastName(e.target.value)}
										/>
									</div>
									<div className="col-md-4">
										<h6 className="basichostid">Host Id</h6>
										<input
											type="text"
											id="basicinfo3"
											className="_1w3ZZo _1YmvCG _2mFmU7"
											autoFocus
											required
											value={id}
											disabled
											style={{ fontSize: "80%" }}
										/>
									</div>
								</div>
								<br></br>
								<div className="row">
									<div className="col-md-4">
										<h6 className="basicgender">Gender</h6>
										<input
											type="text"
											id="basicinfo4"
											class="_1w3ZZo _1YmvCG _2mFmU7"
											autoFocus
											required
											value={gender}
											onChange={(e) => setGender(e.target.value)}
										/>
									</div>
								</div>
							</>
						) : (
							<>
								<div className="row">
									<div className="col-md-4">
										<h6 className="basicfirstname">First Name</h6>
										<input
											type="text"
											id="basicinfo1"
											class="_1w3ZZo _1YmvCG _2mFmU7"
											autoFocus
											required
											value={firstname}
											onChange={(e) => setFirstName(e.target.value)}
											disabled
										/>
									</div>
									<div className="col-md-4">
										<h6 className="basiclastname">Last Name</h6>
										<input
											type="text"
											id="basicinfo2"
											class="_1w3ZZo _1YmvCG _2mFmU7"
											autoFocus
											required
											value={lastname}
											onChange={(e) => setLastName(e.target.value)}
											disabled
										/>
									</div>
									<div className="col-md-4">
										<h6 className="basichostid">Host Id</h6>
										<input
											type="text"
											id="basicinfo3"
											className="_1w3ZZo _1YmvCG _2mFmU7"
											autoFocus
											required
											value={id}
											disabled
											style={{ fontSize: "80%" }}
										/>
									</div>
								</div>
								<br></br>
								<div className="row">
									<div className="col-md-4">
										<h6 className="basicgender">Gender</h6>
										<input
											type="text"
											id="basicinfo4"
											class="_1w3ZZo _1YmvCG _2mFmU7"
											autoFocus
											required
											value={gender}
											onChange={(e) => setGender(e.target.value)}
											disabled
										/>
									</div>
								</div>
							</>
						)}

						<br></br>

						<div class="label">
							<br></br>
							<h4>
								<span class="_1mHr1S">PERSONAL INFORMATION</span>
								<span className="oKZoMVVV">
									<FiEdit onClick={() => setWhere("personal")} />
								</span>
							</h4>
						</div>

						{where == "personal" ? (
							<>
								<div className="row">
									<div className="col-md-4">
										<h6 className="personalemail">Email address</h6>
										<input
											type="text"
											id="personalinfo1"
											className="_1w3ZZo _1YmvCG _2mFmU7"
											autoFocus
											required
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											disabled
											style={{ fontSize: "90%" }}
										/>
									</div>
									<div className="col-md-4">
										<h6 className="personalcontact">contact No</h6>
										<input
											type="text"
											id="personalinfo2"
											className="_1w3ZZo _1YmvCG _2mFmU7"
											autoFocus
											required
											value={contact}
											onChange={(e) => setContact(e.target.value)}
                      maxLength="10"
                      // pattern="[6-9][0-9]{9}"
										/>
									</div>
									<div className="col-md-4">
										<h6 className="personalcity">City</h6>
										<input
											type="text"
											id="personalinfo3"
											class="_1w3ZZo _1YmvCG _2mFmU7"
											autoFocus
											required
											value={city}
											onChange={(e) => setCity(e.target.value)}
										/>
									</div>
								</div>
								<br></br>
								<div className="row">
									<div className="col-md-4">
										<h6 className="personalstate">State</h6>
										<input
											type="text"
											id="personalinfo4"
											class="_1w3ZZo _1YmvCG _2mFmU7"
											autoFocus
											required
											value={state}
											onChange={(e) => setState(e.target.value)}
										/>
									</div>
									<div className="col-md-4">
										<h6 className="personaladdress">Address</h6>
										<input
											type="text"
											id="personalinfo5"
											class="_1w3ZZo _1YmvCG _2mFmU7"
											autoFocus
											required
											value={address}
											onChange={(e) => setAddress(e.target.value)}
										/>
									</div>
									<div className="col-md-4">
										<h6 className="personalzip">Zip</h6>
										<input
											type="text"
											id="personalinfo6"
											class="_1w3ZZo _1YmvCG _2mFmU7"
											autoFocus
											required
											value={zip}
											onChange={(e) => setZip(e.target.value)}
										/>
									</div>
								</div>
							</>
						) : (
							<>
								<div className="row">
									<div className="col-md-4">
										<h6 className="personalemail">Email address</h6>
										<input
											type="text"
											id="personalinfo1"
											className="_1w3ZZo _1YmvCG _2mFmU7"
											autoFocus
											required
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											disabled
											style={{ fontSize: "90%" }}
										/>
									</div>
									<div className="col-md-4">
										<h6 className="personalcontact">contact No</h6>
										<input
											type="text"
											id="personalinfo2"
											className="_1w3ZZo _1YmvCG _2mFmU7"
											autoFocus
											required
											value={contact}
											onChange={(e) => setContact(e.target.value)}
											disabled
										/>
									</div>
									<div className="col-md-4">
										<h6 className="personalcity">City</h6>
										<input
											type="text"
											id="personalinfo3"
											class="_1w3ZZo _1YmvCG _2mFmU7"
											autoFocus
											required
											value={city}
											onChange={(e) => setCity(e.target.value)}
											disabled
										/>
									</div>
								</div>
								<br></br>
								<div className="row">
									<div className="col-md-4">
										<h6 className="personalstate">State</h6>
										<input
											type="text"
											id="personalinfo4"
											class="_1w3ZZo _1YmvCG _2mFmU7"
											autoFocus
											required
											value={state}
											onChange={(e) => setState(e.target.value)}
											disabled
										/>
									</div>
									<div className="col-md-4">
										<h6 className="personaladdress">Address</h6>
										<input
											type="text"
											id="personalinfo5"
											class="_1w3ZZo _1YmvCG _2mFmU7"
											autoFocus
											required
											value={address}
											onChange={(e) => setAddress(e.target.value)}
											disabled
										/>
									</div>
									<div className="col-md-4">
										<h6 className="personalzip">Zip</h6>
										<input
											type="text"
											id="personalinfo6"
											class="_1w3ZZo _1YmvCG _2mFmU7"
											autoFocus
											required
											value={zip}
											onChange={(e) => setZip(e.target.value)}
											disabled
										/>
									</div>
								</div>
							</>
						)}
						<br></br>

						{where == "personal" ? (
							<div className="row">
								<div className="col-md-4">
									<h6 className="personalpassword">Change Password</h6>
									<input
										type="text"
										id="personalinfo4"
										className="_1w3ZZo _1YmvCG _2mFmU7"
										autoFocus
										required
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
								<div className="col-md-4">
									<h6 className="personaldevice">Where you're logged in</h6>
									<input
										type="text"
										id="personalinfo5"
										className="_1w3ZZo _1YmvCG _2mFmU7"
										autoFocus
										required
										value={device}
										onChange={(e) => setDevice(e.target.value)}
									/>
								</div>
							</div>
						) : (
							<div className="row">
								<div className="col-md-4">
									<h6 className="personalpassword">Change Password</h6>
									<input
										type="text"
										id="personalinfo4"
										className="_1w3ZZo _1YmvCG _2mFmU7"
										autoFocus
										required
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										disabled
									/>
								</div>
								<div className="col-md-4">
									<h6 className="personaldevice">Where you're logged in</h6>
									<input
										type="text"
										id="personalinfo5"
										className="_1w3ZZo _1YmvCG _2mFmU7"
										autoFocus
										required
										value={device}
										onChange={(e) => setDevice(e.target.value)}
										disabled
									/>
								</div>
							</div>
						)}

						<br></br>

						<div className="label">
							<br></br>
							<h4>
								<span className="_1mHr1S">SOCIAL LINKS</span>
								<span className="oKZoMVVV">
									<FiEdit onClick={() => setWhere("social")} />
								</span>
							</h4>
						</div>

						{where == "social" ? (
							<div className="row">
								<div className="col-md-4">
									<h6 className="socialinsta">Instagram link</h6>
									<input
										type="text"
										id="social1"
										className="_1w3ZZo _1YmvCG _2mFmU7"
										autoFocus
										required
										value={insta}
										onChange={(e) => setInsta(e.target.value)}
									/>
								</div>
								<div className="col-md-4">
									<h6 className="socialfacebook">Facebook link</h6>
									<input
										type="text"
										id="social2"
										className="_1w3ZZo _1YmvCG _2mFmU7"
										autoFocus
										required
										value={facebook}
										onChange={(e) => setFacebook(e.target.value)}
									/>
								</div>
								<div className="col-md-4">
									<h6 className="socialrating">Ratings</h6>
									<input
										type="text"
										id="social3"
										className="_1w3ZZo _1YmvCG _2mFmU7"
										autoFocus
										required
										value={rating}
										onChange={(e) => setRating(e.target.value)}
									/>
								</div>
							</div>
						) : (
							<div className="row">
								<div className="col-md-4">
									<h6 className="socialinsta">Instagram link</h6>
									<input
										type="text"
										id="social1"
										className="_1w3ZZo _1YmvCG _2mFmU7"
										autoFocus
										required
										value={insta}
										onChange={(e) => setInsta(e.target.value)}
										disabled
									/>
								</div>
								<div className="col-md-4">
									<h6 className="socialfacebook">Facebook link</h6>
									<input
										type="text"
										id="social2"
										className="_1w3ZZo _1YmvCG _2mFmU7"
										autoFocus
										required
										value={facebook}
										onChange={(e) => setFacebook(e.target.value)}
										disabled
									/>
								</div>
								<div className="col-md-4">
									<h6 className="socialrating">Ratings</h6>
									<input
										type="text"
										id="social3"
										className="_1w3ZZo _1YmvCG _2mFmU7"
										autoFocus
										required
										value={rating}
										onChange={(e) => setRating(e.target.value)}
										disabled
									/>
								</div>
							</div>
						)}

						{/* <button type='submit' className=' deletebtn btn btn-default'>Delete Account</button> */}

						<button
							type="submit"
							class=" deletebtn btn btn-default"
							data-target="#exampleModalLong"
							data-toggle="modal"
						>
							Delete Account
						</button>
						<div
							class="modal fade"
							id="exampleModalLong"
							tabindex="-1"
							role="dialog"
							aria-labelledby="exampleModalLongTitle"
							aria-hidden="true"
						>
							<div class="modal-dialog" role="document">
								<div class="modal-content" id="dlt">
									<div class="modal-header">
										<h5 class="modal-title" id="exampleModalLongTitle">
											Delete Account
										</h5>
										<button
											type="button"
											class="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										Are you sure you want to delete your account?
									</div>
									<div class="modal-footer">
										<button type="button" class="btn btn-primary" id="yesbtn" onClick={deleteUser}>
											Yes
										</button>
										&nbsp; &nbsp;
										<button
											type="button"
											class="btn btn-secondary"
											data-dismiss="modal"
											id="nobtn"
										>
											No
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<br></br>
					<br></br>
					<div className="button">
						<button
							type="submit"
							className="donebtn btn btn-default"
							onClick={editInfo}
						>
							Done
						</button>
					</div>
				</Card.Body>
				<br></br>
			</Card>
		</>
	);

	return (
		<>
			<Header />
			<Navbar />

			<div className="container">
				<div className="row text-bold no-gutters">
					<div className="column col col-xs-4">
						<Link to="hostpanel">
							{" "}
							<h4 className="text-bold lead" style={adminheading}>
								Host Dashboard
							</h4>
						</Link>
					</div>

					<div className="column col col-xs-4" style={search}></div>
					<div className="column col col-xs-4" style={notifications}>
						<Link className="nav-link" to="hostnotification">
							Notifications &nbsp;
						</Link>

						<Link className="nav-link" to="/hostprofile">
							Profile &nbsp; &nbsp;
						</Link>

						<Link to="/login">
							<button type="button" className="btn btn-logout zoom-2">
								<span className="text-bold">Logout</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
			<br></br>

			<div>{profileform}</div>

			<br></br>
			<br></br>
			<br></br>
			<br></br>

			<Footer />
		</>
	);
};

export default HostProfile;
