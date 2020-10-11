import React from "react";
import PropTypes from "prop-types";
import Carousel from "../../components/Carousel/Carousel";
import styles from "./styles.module.css";

const Home = (props) => {
	return (
		<main className={styles.home}>
			<Carousel />
		</main>
	);
};

Home.propTypes = {};

export default Home;
