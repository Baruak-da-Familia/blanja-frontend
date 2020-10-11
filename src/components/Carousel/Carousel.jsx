import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from "../ImgWithContainer/ImgWithContainer";
import exp from "../../assets/img/trend2020.jpeg";
import text from "../../assets/text.module.css";
import classname from "../../helpers/classJoiner";
import styles from "./styles.module.css";
import "./carousel.css";
import leftArrow from "../../assets/img/arrowleft.png";
import rigthArrow from "../../assets/img/arrowright.png";

const CustomLeftArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		// <Img
		// 	key="leftarrow"
		// 	style={style}
		// 	containerStyle={classname(className, styles.arrowLeft)}
		// 	imgStyle={styles.arrowImg}
		// 	onClick={onClick}
		// 	source={leftArrow}
		// />
		<div
			className={className}
			style={
				style
				// width: "52px",
				// height: "52px",
				// borderRadius: "50%",
				// backgroundColor: "white",
				// zIndex: 10,
				// alignSelf: "center",
				// marginLeft: "50px",
			}
			onClick={onClick}
		/>
	);
};

const CustomRightArrow = (props) => {
	const { className, style, onClick } = props;
	console.log(props);
	return (
		<Img
			key="rightarrow"
			style={{ ...style }}
			containerStyle={classname(className, styles.arrowRight)}
			imgStyle={styles.arrowImg}
			onClick={onClick}
			source={rigthArrow}
		/>
	);
};

const settings = {
	className: "center",
	centerMode: true,
	infinite: true,
	centerPadding: "-70px",
	slidesToShow: 3,
	speed: 500,
	// autoplay: true,
	nextArrow: <CustomRightArrow />,
	prevArrow: <CustomLeftArrow />,
	arrows: true,
};

const Carousel = (props) => {
	return (
		<Slider {...settings}>
			<div className={styles.carouselItem}>
				<Img
					key="carousel1"
					containerStyle={styles.carouselItem}
					imgStyle={styles.carouselImg}
					source={exp}
				/>
				<p className={classname(text.headline, styles.legendText)}>
					Trends in 2020
				</p>
			</div>
			<div className={styles.carouselItem}>
				<Img
					key="carousel2"
					containerStyle={styles.carouselItem}
					imgStyle={styles.carouselImg}
					source={exp}
				/>
				<p className={classname(text.headline, styles.legendText)}>
					Trends in 2020
				</p>
			</div>
			<div className={styles.carouselItem}>
				<Img
					key="carousel3"
					containerStyle={styles.carouselItem}
					imgStyle={styles.carouselImg}
					source={exp}
				/>
				<p className={classname(text.headline, styles.legendText)}>
					Trends in 2020
				</p>
			</div>
			<div className={styles.carouselItem}>
				<Img
					key="carousel4"
					containerStyle={styles.carouselItem}
					imgStyle={styles.carouselImg}
					source={exp}
				/>
				<p className={classname(text.headline, styles.legendText)}>
					Trends in 2020
				</p>
			</div>
			<div className={styles.carouselItem}>
				<Img
					key="carousel5"
					containerStyle={styles.carouselItem}
					imgStyle={styles.carouselImg}
					source={exp}
				/>
				<p className={classname(text.headline, styles.legendText)}>
					Trends in 2020
				</p>
			</div>
		</Slider>
	);
};

Carousel.propTypes = {
	data: PropTypes.array,
	carouselType: PropTypes.string,
};

export default Carousel;
