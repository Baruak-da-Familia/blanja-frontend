import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import ImgWithContainer from "../ImgWithContainer/ImgWithContainer";
import SearchBar from "../SearchBar/SearchBar";
import textStyle from "../../assets/text.module.css";
import classname from "../../helpers/classJoiner";

const Navbar = (props) => {
	const inputRef = React.useRef();
	console.log(typeof styles.navbar);
	return (
		<header className={styles.navbar}>
			{/* logo */}
			<ImgWithContainer />
			<h2>Blanja</h2>
			<SearchBar refProp={inputRef} />
			{/* filter icon */}
			<ImgWithContainer />
			{/* cart icon */}
			<ImgWithContainer />
			{props.isLoggedIn && props.token ? (
				<nav>
					{/* notification */}
					<ImgWithContainer />
					{/* message */}
					<ImgWithContainer />
					{/* profile */}
					<ImgWithContainer />
				</nav>
			) : (
				<div className={styles.buttonContainer}>
					<button
						className={classname(
							styles.loginButton,
							textStyle.descriptionText
						)}
					>
						Login
					</button>
					<button
						className={classname(
							styles.signupButton,
							textStyle.descriptionText
						)}
					>
						Signup
					</button>
				</div>
			)}
		</header>
	);
};

Navbar.propTypes = {
	isLoggedIn: PropTypes.bool,
	token: PropTypes.string,
};

export default Navbar;
