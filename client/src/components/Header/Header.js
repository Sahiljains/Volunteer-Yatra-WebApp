import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/images/logo-header.png";
import leftArrowButton from "../../assets/buttons/left-button-arrow.png";

const Header = ({ showShadow, notToShow, help }) => {
	const isLogin = sessionStorage.getItem("isLogin");
	return (
		<div className={`top-index ${showShadow ? "bottom-shadow" : ""}`}>
			<div className="container-fluid">
				<nav className="navbar navbar-expand-lg main-navbar navbar-light py-4">
					<Link className="navbar-brand" to="/">
						<img src={logo} alt="" />
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					{isLogin !== "true" ? (
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav ml-auto text-bold d-flex flex-column">
								{!help && notToShow !== "host" && (
									<li className="nav-item">
										<Link className="nav-link zoom" to="/register/host">
											Be a Host <img src={leftArrowButton} alt="" />
										</Link>
									</li>
								)}

								{!help && notToShow !== "yatri" && (
									<li className="nav-item">
										<Link className="nav-link zoom" to="/register/yatri">
											Be a Yatri <img src={leftArrowButton} alt="" />
										</Link>
									</li>
								)}

								{help && (
									<li className="nav-item">
										<Link className="nav-link zoom" to="/register/yatri">
											Submit a request <img src={leftArrowButton} alt="" />
										</Link>
									</li>
								)}

								{notToShow !== "login" && (
									<li className="nav-item">
										<Link to="/login">
											<button type="button" className="btn btn-login zoom-2">
												<span className="text-bold">Login</span>
											</button>
										</Link>
									</li>
								)}
							</ul>
						</div>
					) : (
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav ml-auto text-bold d-flex flex-column">
								{notToShow !== "login" && (
									<li className="nav-item">
										<Link to="/login">
											<button
												type="button"
												className="btn btn-login zoom-2"
												onClick={() => sessionStorage.removeItem("isLogin")}
											>
												<span className="text-bold">Logout</span>
											</button>
										</Link>
									</li>
								)}
							</ul>
						</div>
					)}
				</nav>
			</div>
		</div>
	);
};

Header.defaultProps = {
	notToShow: "",
	help: false,
};

export default Header;
