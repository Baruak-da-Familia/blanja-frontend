import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import ImgWithContainer from "../ImgWithContainer/ImgWithContainer";
import SearchBar from "../SearchBar/SearchBar";
import textStyle from "../../assets/img/text.module.css";

const Navbar = (props) => {
	const inputRef = React.useRef();
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
					<button className={styles.loginButton}>Login</button>
					<button className={styles.signupButton}>Signup</button>
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
