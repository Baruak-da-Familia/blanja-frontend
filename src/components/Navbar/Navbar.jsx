import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";
import Img from "../ImgWithContainer/ImgWithContainer";
import SearchBar from "../SearchBar/SearchBar";
import text from "../../assets/text.module.css";
import colors from "../../assets/colors.module.css";
import classname from "../../helpers/classJoiner";
import logo from "../../assets/img/logo.png";
import filter from "../../assets/img/filter.png";
import cart from "../../assets/img/cart.png";
import notification from "../../assets/img/bell.png";
import message from "../../assets/img/message.png";
import userDefault from "../../assets/img/default.png";

const Navbar = (props) => {
	const isLoggedIn = true;
	const token = "test";
	return (
		<header className={classname(styles.navbar, colors.white)}>
			<div className="d-flex flex-row justify-content-around">
				<Img
					key="logo"
					containerStyle={styles.logo}
					imgStyle={styles.logoImg}
					source={logo}
					onClickProp={() => {
						props.history.push("/");
					}}
				/>
				<SearchBar />
				<Img
					key="filter"
					containerStyle={styles.filter}
					imgStyle={styles.filterImg}
					source={filter}
				/>
			</div>
			<div className="d-flex flex-row justify-content-around">
				<Img
					key="cart"
					source={cart}
					containerStyle={styles.cart}
					imgStyle={styles.cartImg}
					onClickProp={() => {
						props.history.push("/mybag");
					}}
				/>
				{isLoggedIn && token ? (
					<nav className={styles.navList}>
						<Img
							key="notification"
							source={notification}
							containerStyle={styles.navIcon}
							imgStyle={styles.navIconImg}
						/>
						<Img
							key="message"
							source={message}
							containerStyle={styles.navIcon}
							imgStyle={styles.navIconImg}
							onClickProp={() => {
								props.history.push("/chat");
							}}
						/>
						<Img
							key="profile"
							source={userDefault}
							containerStyle={styles.profile}
							imgStyle={styles.profileImg}
							onClickProp={() => {
								props.history.push("/profile");
							}}
						/>
					</nav>
				) : (
					<div className={styles.buttonContainer}>
						<button
							className={classname(
								styles.loginButton,
								text.descriptionText,
								colors.error
							)}
						>
							Login
						</button>
						<button
							className={classname(
								styles.signupButton,
								text.descriptionText,
								colors.white
							)}
						>
							Signup
						</button>
					</div>
				)}
			</div>
		</header>
	);
};

Navbar.propTypes = {};

export default Navbar;
