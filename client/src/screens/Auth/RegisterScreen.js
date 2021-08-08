/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import validator from "validator";
import { register, registerViaGoogle,registerViaFB } from "../../services/auth";

import executeTostr from "../../containers/common/tostrMsg/TostrComponent";
import { defaulSuccessMsgs as Messages } from "../../utils/messages";

import fbLogin from "../../assets/buttons/fb-login.png";
import googleLogin from "../../assets/buttons/google-login.png";

import useInput from "./../../utils/useInput";
import registerYatriBG from "../../assets/vectors/register-bg.svg";
import registerHostBG from "../../assets/vectors//register-bg-light.svg";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import FormInput from "./../../utils/FormInput";

import {GoogleLogin} from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

import "./auth.scss";

import { useDispatch } from "react-redux";
// import { register } from "../../redux/actions/auth";

const RegisterScreen = ({ match: { params }, history }) => {
	const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

	const [firstname, setFirstname] = useState("");
	const [lastname, setlastname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [confPassword, setConfPassword] = useState("");

	// console.log('params : ', params);
	// const firstName = useInput({});
	// const lastName = useInput({});
	// const email = useInput({
	// 	regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
	// });
	// const mobileNo = useInput({ regex: /^[6789]\d{9}$/ });
	// const password = useInput({
	// 	regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
	// });
	// const password2 = useInput({
	// 	regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
	// 	regexCheck: false,
	// });

	const dispatch = useDispatch();

	// const resetInput = () => {
	// 	firstName.reset();
	// 	lastName.reset();
	// 	email.reset();
	// 	mobileNo.reset();
	// 	password.reset();
	// 	password2.reset();
	// };

	useEffect(() => {
		if (!params.reg || (params.reg !== "host" && params.reg !== "yatri")) {
			history.push("/");
		}
		window.scrollTo(0, window.innerHeight / 3);
		// resetInput();
		// eslint-disable-next-line
	}, [params.reg, history]);

	// const registerSubmit = (e) => {
	// 	e.preventDefault();
	// if (
	// 	firstName.value === "" ||
	// 	lastName.value === "" ||
	// 	email.value === "" ||
	// 	mobileNo.value === "" ||
	// 	password.value === "" ||
	// 	password2.value === ""
	// ) {
	// 	if (firstName.value === "") firstName.setError("true");
	// 	if (lastName.value === "") lastName.setError("true");
	// 	if (email.value === "") email.setError("true");
	// 	if (mobileNo.value === "") mobileNo.setError("true");
	// 	if (password.value === "") password.setError("true");
	// 	if (password2.value === "") password2.setError("true");
	// 	return;
	// }
	// if (password.value && password2.value) {
	// 	if (password.value !== password2.value) {
	// 		password2.setError("true");
	// 		return;
	// 	} else password2.setError("false");
	// }
	// if (
	// 	firstName.error === "true" ||
	// 	lastName.error === "true" ||
	// 	email.error === "true" ||
	// 	mobileNo.error === "true" ||
	// 	password.error === "true"
	// ) {
	// 	return;
	// }
	// const newUser = {
	// 	mobileNo: "+91" + mobileNo.value,
	// 	email: email.value,
	// 	firstName: firstName.value,
	// 	lastName: lastName.value,
	// 	password: password.value,
	// 	role: params.reg.charAt(0).toUpperCase() + params.reg.slice(1),
	// };
	// dispatch(register(newUser));
	// };

	const registerSubmit = async (e) => {
		e.preventDefault();
		e.stopPropagation();

		try {
			//   if (userpassword !== confPassword) {
			// 	executeTostr(Messages.registrationPassMismatch, { type: 'warn' });
			// 	return false;
			//   }
			//   SetSpinner(true);
			const registerData = await register(
				firstname,
				lastname,
				phone,
				email,
				password,
				params.reg
			);
			// console.log("registerData : ", registerData);
			if (registerData && !registerData.data) {
				executeTostr(Messages.registrationFail, { type: "error" });
				return false;
			}
			if (
				registerData &&
				(registerData.data.data.token === "<AUTH_TOKEN>" ||
					registerData.data.data.token === "" ||
					!registerData.data.data.token)
			) {
				executeTostr(Messages.registrationFail, { type: "error" });
			} else if (registerData && registerData.data && registerData.data.data.token) {
				executeTostr(registerData.data.data.message, { type: "success" });
			}
		} catch (error) {
			if (error && error.response && error.response.status === 409) {
				executeTostr(Messages.userAlreadyRegistered, { type: "error" });
			} else {
				executeTostr(Messages.registrationFail, { type: "error" });
			}
			// SetSpinner(false);
		}
	};
	// const [firstname, setFirstname] = useState("");
	// const [lastname, setlastname] = useState("");
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	// const [phone, setPhone] = useState("");
	// const [confPassword, setConfPassword] = useState("");

	const googleSuccess = async (res) => {
		// e.preventDefault();
		// e.stopPropagation();

		try {
			//   if (userpassword !== confPassword) {
			// 	executeTostr(Messages.registrationPassMismatch, { type: 'warn' });
			// 	return false;
			//   }
			//   SetSpinner(true);

			const { email, givenName, familyName, imageUrl, googleId } = res.profileObj;

			const { accessToken } = res;

			console.log(res)

			const registerData = await registerViaGoogle(
				givenName,
				familyName,
				email,
				imageUrl,
				googleId,
				accessToken,
				params.reg
			);
			// console.log("registerData : ", registerData);
			if (registerData && !registerData.data) {
				executeTostr(Messages.registrationFail, { type: "error" });
				return false;
			}
			if (
				registerData &&
				(registerData.data.data.token === "<AUTH_TOKEN>" ||
					registerData.data.data.token === "" ||
					!registerData.data.data.token)
			) {
				executeTostr(Messages.registrationFail, { type: "error" });
			} else if (registerData && registerData.data && registerData.data.data.token) {
				executeTostr(registerData.data.data.message, { type: "success" });
			}
		} catch (error) {
			if (error && error.response && error.response.status === 409) {
				executeTostr(Messages.userAlreadyRegistered, { type: "error" });
			} else {
				executeTostr(Messages.registrationFail, { type: "error" });
			}
			// SetSpinner(false);
		}
	};

	const responseFacebook = async (res) => {
		// e.preventDefault();
		// e.stopPropagation();

		try {
			//   if (userpassword !== confPassword) {
			// 	executeTostr(Messages.registrationPassMismatch, { type: 'warn' });
			// 	return false;
			//   }
			//   SetSpinner(true);

			const { email, name, id,accessToken } = res;

			const { url } = res.picture.data;
			const sp = name.split(" ");

            const givenName = sp[0], familyName = sp[1];

			console.log(res)

			const registerData = await registerViaFB(
				givenName,
				familyName,
				email,
				url,
				id,
				accessToken,
				params.reg
			);
			// console.log("registerData : ", registerData);
			if (registerData && !registerData.data) {
				executeTostr(Messages.registrationFail, { type: "error" });
				return false;
			}
			if (
				registerData &&
				(registerData.data.data.token === "<AUTH_TOKEN>" ||
					registerData.data.data.token === "" ||
					!registerData.data.data.token)
			) {
				executeTostr(Messages.registrationFail, { type: "error" });
			} else if (registerData && registerData.data && registerData.data.data.token) {
				executeTostr(registerData.data.data.message, { type: "success" });
			}
		} catch (error) {
			if (error && error.response && error.response.status === 409) {
				executeTostr(Messages.userAlreadyRegistered, { type: "error" });
			} else {
				executeTostr(Messages.registrationFail, { type: "error" });
			}
			// SetSpinner(false);
		}
	};

	const googleFailure = (error) => {
		console.log(error);
	}

	const matchPassword = (value) => {
		return value && value === password;
	};

	let form = (
		// <form className="px-5" onSubmit={registerSubmit}>
		<React.Fragment>
			<div className="row">
				{/* <div className="p4 px-3 text-semi-bold">
					Name <span className="text-danger">*</span>
				</div> */}
				<div className="col-sm-6">
					<div className="p4 px-3 text-semi-bold">
						First name <span className="text-danger">*</span>
					</div>
					<TextInput
						name="firstName"
						id="firstName"
						autoFocus
						placeholder="First Name"
						required
						value={firstname}
						onChange={(e) => setFirstname(e.target.value)}
					/>
				</div>
				<div className="col-sm-6">
					<div className="p4 px-3 text-semi-bold">
						Last name <span className="text-danger">*</span>
					</div>
					<TextInput
						name="lastName"
						id="lastName"
						placeholder="Last Name"
						minLength="4"
						value={lastname}
						onChange={(e) => setlastname(e.target.value)}
					/>{" "}
				</div>
			</div>
			<div className="p4 px-3 text-semi-bold">
				Email <span className="text-danger">*</span>
			</div>
			<TextInput
				name="email"
				id="input-with-icon-grid"
				type="email"
				placeholder="Eg: example@gmail.com"
				required
				validator={validator.isEmail}
				autoComplete="false"
				maxLength={100}
				errorMessage={{ validator: "Please enter a valid email" }}
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<div className="p4 px-3 text-semi-bold">
				Phone<span className="text-danger">*</span>
			</div>
			<TextInput
				name="mobile"
				id="mobile"
				placeholder="Eg: 9898989898"
				required
				value={phone}
				onChange={(e) => setPhone(e.target.value)}
				validator={validator.isMobilePhone}
			/>
			<div className="p4 px-3 text-semi-bold">
				Password <span className="text-danger">*</span>
			</div>
			<TextInput
				name="password"
				id="adornment-password"
				placeholder="••••••••"
				type="password"
				required
				pattern="(?=.*[A-Z]).{6,}"
				errorMessage={{
					required: "Password is required",
					pattern:
						"Password should be at least 5 characters with 1 capital letter.",
				}}
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>
			<div className="p4 px-3 text-semi-bold">
				Confirm Password <span className="text-danger">*</span>
			</div>
			<TextInput
				name="confirmPassword"
				id="confirmPassword"
				type="password"
				placeholder="••••••••"
				required
				validator={matchPassword}
				errorMessage={{
					required: "Confirm password is required",
					validator: "Password does not match",
				}}
				value={confPassword}
				onChange={(e) => {
					setConfPassword(e.target.value);
				}}
			/>

			<div className="form-input-section text-center mt-5">
				<button
					type="submit"
					className={`'text-medium zoom-2 bg-color-${
						params.reg === "host" ? "1" : "2"
					}`}
				>
					Signup
				</button>
			</div>
		</React.Fragment>
	);
	return (
		<>
			<Header notToShow={params.reg} showShadow={true} />
			<div
				className={`register-screen ${
					params.reg && params.reg === "host" ? "host-bg-color" : ""
				} py-5`}
			>
				<div className="container-fluid mt-5 mb-4 p-0">
					<div className="register-card">
						<div className="row no-gutters">
							<div
								className={`col-5 d-flex flex-column justify-content-center m-0 ${
									params.reg && params.reg === "host"
										? "green-blue-bg"
										: "yellow-bg lead"
								}`}
								style={{
									backgroundImage: `url(${
										params.reg && params.reg === "host"
											? registerHostBG
											: registerYatriBG
									})`,
								}}
							>
								<h1
									className={`text-semi-bold ${
										params.reg && params.reg === "host" ? "white" : "lead"
									}`}
								>
									{params.reg && params.reg === "host"
										? "Finish your dream projects!"
										: "Adventure starts here yatris!"}
								</h1>
								<p
									className={`p2 text-medium py-4 ${
										params.reg && params.reg === "host" ? "white" : "lead"
									}`}
								>
									{params.reg && params.reg === "host"
										? "Create an account to meet enthusiastic Yatris."
										: "Create an account to join the community"}
								</p>
							</div>
							<div className="col-7 bg-white py-4 px-3">
								<div className="horizontal-padding">
									<h3 className="text-center lead text-semi-bold py-3">
										Create Account
									</h3>
									<div className="o-auth text-center py-3">
									
										<FacebookLogin
                                            appId="266104995265016"
                                            callback={responseFacebook}
											fields="name,email,picture"
                                            render={renderProps => (
											<img src={fbLogin} alt="" className="cursor zoom-2" onClick={renderProps.onClick} disabled={renderProps.disabled}/>
                                        )}
                                        />
										<GoogleLogin
											clientId={clientId}
											render={(renderProps) => (
													<img src={googleLogin} alt="" className="cursor zoom-2" onClick={renderProps.onClick} disabled={renderProps.disabled}/>
											)}
											onSuccess={googleSuccess}
											onFailure={googleFailure}
											cookiePolicy='single_host_origin'
										/>

											{/* <img src={googleLogin} alt="" className="cursor zoom-2"/> */}
									</div>
									<div
										className={`p4 text-center text-semi-bold line-break ${
											params.reg && params.reg === "host"
												? "green-blue"
												: "yellow"
										}-line-break`}
									>
										<span>or</span>
									</div>
								</div>
								<ValidationForm
									// className={classes.form}
									onSubmit={registerSubmit}
									onError={(errors) => console.log(errors)}
								>
									{form}
								</ValidationForm>

								<div className="form-utility d-flex flex-column align-items-center">
									<span className="text-medium pt-3 text-muted">
										Already Registered?{" "}
										<Link to="/login" className="text-muted href">
											Login now
										</Link>
									</span>
									<span className="text-medium pt-3">
										Registering to this website, you accept our{" "}
										<Link to="#" className="href">
											Terms of use
										</Link>{" "}
										and our{" "}
										<Link to="#" className="href">
											Private Policy
										</Link>
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="p-4 text-medium">
						<label className="zoom-2">
							<Link to="/">Back to home</Link>
						</label>
					</div>
				</div>
			</div>
			<Footer showShadow={true} showLinks={false} />
		</>
	);
};

export default RegisterScreen;
