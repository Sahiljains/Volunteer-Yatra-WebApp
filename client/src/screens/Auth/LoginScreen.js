/* eslint-disable no-useless-escape */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { login as authUser, googleLogin as authGoogleUser,FBLogin as authFBUser  } from "../../services/auth";

import { ValidationForm, TextInput } from "react-bootstrap4-form-validation";
import validator from "validator";
import executeTostr from "../../containers/common/tostrMsg/TostrComponent";

import loginImg from "../../assets/images/login-img.png";

import fbLogin from "../../assets/buttons/fb-login.png";
import googleLogin from "../../assets/buttons/google-login.png";

import useInput from "./../../utils/useInput";

import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import FormInput from "./../../utils/FormInput";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { refreshTokenSetup } from "../../containers/common/refreshToken";
import "./auth.scss";

const LoginScreen = (props) => {
	const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
	// console.log("props : ", props);

	const [isLogin, setIsLogin] = useState(false);
	const [token, setToken] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	useEffect(() => window.scrollTo(0, window.innerHeight / 2), []);
	// const email = useInput({
	// 	regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
	// });
	// const password = useInput({ regexCheck: false });

	useEffect(() => {
		if (isLogin) {
			props.history.push({
				pathname: "/dashboard",
				state: { isLogin: isLogin },
			});
		} else if (!token && isLogin) {
			executeTostr("Something went wrong!!!", { type: "error" });
		}
	}, [token, isLogin]);

	const submitHandler = async (e) => {
		e.preventDefault();
		e.stopPropagation();

		const loginData = await authUser(email, password);
		console.log("login Data : ", loginData);
		if (loginData && !loginData.data) {
			executeTostr("Login failed", { type: "error" });
			setIsLogin(false);
			return false;
		} else if (loginData && loginData.status === 401) {
			executeTostr(loginData.data.message, { type: "error" });
			setIsLogin(false);
		} else if (
			loginData &&
			(loginData.data.data.accessToken === "<AUTH_TOKEN>" ||
				loginData.data.data.accessToken === "" ||
				!loginData.data.data.accessToken)
		) {
			executeTostr(loginData.data.message, { type: "error" });
			setIsLogin(false);
		} else if (loginData && loginData.data && loginData.data.data.accessToken) {
			sessionStorage.setItem("token", loginData.data.data.accessToken);
			sessionStorage.setItem("isLogin", true);
			setIsLogin(true);
			setToken(loginData.data.data.accessToken);
		}
	};
	// function onSignIn(googleUser) {
	// 	console.log("googleUser : ", googleUser);
	// 	var profile = googleUser.getBasicProfile();
	// 	console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
	// 	console.log("Name: " + profile.getName());
	// 	console.log("Image URL: " + profile.getImageUrl());
	// 	console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
	// }
	// function signOut() {
	// 	var auth2 = gapi.auth2.getAuthInstance();
	// 	auth2.signOut().then(function () {
	// 		console.log("User signed out.");
	// 	});
	// }
	// const onSuccess = (response) => {
	// 	// console.log("response success: ", response.tokenId);
	// 	// refresh token
	// 	refreshTokenSetup(response);

	// 	// send to server
	// 	let id_token = response.tokenId;
	// 	// console.log("id_token : ", id_token);
	// 	let xhr = new XMLHttpRequest();
	// 	// console.log('xhr : ', xhr);
	// 	xhr.open("POST", "http://localhost:3000/login");
	// 	xhr.setRequestHeader("Content-Type", "application/json");
	// 	xhr.onload = function () {
	// 		console.log("signed in as : ", xhr.responseText);
	// 	};
	// 	xhr.send(JSON.stringify({ token: id_token }));
	// };
	// const onFailure = (response) => {
	// 	console.log("response failure: ", response);
	// };
	// const logout = () => {
	// 	console.log("logout success");
	// };

	const onSuccess = async(res) => {

		const { email, googleId } = res.profileObj;

		const loginData = await authGoogleUser(email, googleId);
		console.log("login Data : ", loginData);
		if (loginData && !loginData.data) {
			executeTostr("Login failed", { type: "error" });
			setIsLogin(false);
			return false;
		} else if (loginData && loginData.status === 401) {
			executeTostr(loginData.data.message, { type: "error" });
			setIsLogin(false);
		} else if (
			loginData &&
			(loginData.data.data.accessToken === "<AUTH_TOKEN>" ||
				loginData.data.data.accessToken === "" ||
				!loginData.data.data.accessToken)
		) {
			executeTostr(loginData.data.message, { type: "error" });
			setIsLogin(false);
		} else if (loginData && loginData.data && loginData.data.data.accessToken) {
			sessionStorage.setItem("token", loginData.data.data.accessToken);
			sessionStorage.setItem("isLogin", true);
			setIsLogin(true);
			setToken(loginData.data.data.accessToken);
		}
	}
    
	const onFailure = () => {
		console.log('Login Failed')
	}

	const responseFacebook = async(res) => {
		console.log(res);
		
			const { email,id} = res;
	
			const loginData = await authFBUser(email,id);
			console.log("login Data : ", loginData);
		if (loginData && !loginData.data) {
			executeTostr("Login failed", { type: "error" });
			setIsLogin(false);
			return false;
		} else if (loginData && loginData.status === 401) {
			executeTostr(loginData.data.message, { type: "error" });
			setIsLogin(false);
		} else if (
			loginData &&
			(loginData.data.data.accessToken === "<AUTH_TOKEN>" ||
				loginData.data.data.accessToken === "" ||
				!loginData.data.data.accessToken)
		) {
			executeTostr(loginData.data.message, { type: "error" });
			setIsLogin(false);
		} else if (loginData && loginData.data && loginData.data.data.accessToken) {
			sessionStorage.setItem("token", loginData.data.data.accessToken);
			sessionStorage.setItem("isLogin", true);
			setIsLogin(true);
			setToken(loginData.data.data.accessToken);
		}
			
		
	}

	const logout = () => {
		console.log("Logout")
	}
	// login form
	let form = (
		<React.Fragment>
			<div className="p4 px-3 text-semi-bold">
				Email <span className="text-danger">*</span>
			</div>

			<TextInput
				name="email"
				id="input-with-icon-grid"
				type="email"
				placeholder="Email"
				required
				validator={validator.isEmail}
				autoComplete="false"
				maxLength={100}
				errorMessage={{ validator: "Please enter a valid email" }}
				value={email}
				autoFocus
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<div className="p4 px-3 text-semi-bold">
				Password <span className="text-danger">*</span>
			</div>
			<TextInput
				name="password"
				id="adornment-password"
				type="password"
				placeholder="Password"
				required
				pattern="(?=.).{5,}"
				maxLength={25}
				autoComplete="false"
				errorMessage={{
					required: "Password is required",
					pattern: "Password should be at least 5 characters.",
				}}
				value={password}
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>

			<div className="form-input-section text-center">
				<button type="submit" className="text-medium zoom-2 bg-color-1">
					Login
				</button>
			</div>
		</React.Fragment>
	);

	return (
		<>
			<Header notToShow="login" />
			<Navbar showShadow={true} />
			<div className="login-screen py-5">
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-7 px-md-5 px-sm-0 vertical-margin">
							<h1 className="text-semi-bold">Welcome to Volunteer Yatra!</h1>
							<h3 className="text-semi-bold lead py-3">
								Login and enjoy awesomeness.
							</h3>
							<div className="my-5">
								<p className="text-semi-bold lead p4 m-0">Not a member yet?</p>
								<p className="text-semi-bold lead p4">
									Signup as a{" "}
									<Link to="/register/yatri">
										<u>Yatri</u>
									</Link>{" "}
									or as a{" "}
									<Link to="/register/host">
										<u>Host</u>
									</Link>
									?
								</p>
							</div>
						</div>

						<div className="col-md-5 my-5 p-0">
							<div className="card login-card">
								<div className="card-img">
									<img src={loginImg} alt="" />
								</div>
								<div className="card-body">
									<ValidationForm
										// className={classes.form}
										onSubmit={submitHandler}
										onError={(errors) => console.log(errors)}
									>
										{form}
									</ValidationForm>

									<div className="p4 text-center text-semi-bold line-break yellow-line-break">
										<span>or</span>
									</div>

									<div className="o-auth text-center">
										<GoogleLogin
											clientId={clientId}
											render={(renderProps) => (
												<img src={googleLogin} alt="Google Login" className="cursor zoom-2" onClick={renderProps.onClick} disabled={renderProps.disabled}/>
											)}
											onSuccess={onSuccess}
											onFailure={onFailure}
											cookiePolicy='single_host_origin'
										/>
										<FacebookLogin
                                            appId="266104995265016"
											fields="name,email,picture"
                                            callback={responseFacebook}
											onFailure={onFailure}
                                            render={renderProps => (
												<img src={fbLogin} alt="Facebook Login" className="cursor zoom-2" onClick={renderProps.onClick} disabled={renderProps.disabled}/>
                                        )}
                                        />
										{/* <GoogleLogout
											clientId={clientId}
											buttonText="Logout"
											onLogoutSuccess={logout}
										></GoogleLogout> */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer showLinks={false} />
		</>
	);
};

export default LoginScreen;
