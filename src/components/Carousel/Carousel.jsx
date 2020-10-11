import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import useWindowDimensions from "../../utils/viewportHooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from "../ImgWithContainer/ImgWithContainer";
import text from "../../assets/text.module.css";
import classname from "../../helpers/classJoiner";
import styles from "./styles.module.css";
import "./carousel.css";
import leftArrow from "../../assets/img/left.png";
import rigthArrow from "../../assets/img/right.png";

const colors = [
	styles.red,
	styles.green,
	styles.blue,
	styles.orange,
	styles.pink,
];

const CustomLeftArrow = (props) => {
	const { className, style, onClick } = props;
	return (
		<Img
			key="leftarrow"
			style={style}
			containerStyle={classname(className, styles.arrowLeft)}
			imgStyle={styles.arrowImg}
			onClick={onClick}
			source={leftArrow}
		/>
	);
};

const CustomRightArrow = (props) => {
	const { className, style, onClick } = props;
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

const PreviewItem = (props) => {
	return (
		<div className={styles.previewlItem}>
			<Img
				key={props.id}
				containerStyle={styles.previewlItem}
				imgStyle={styles.previewImg}
				source={props.image}
			/>
			<p className={classname(text.headline, styles.legendText)}>
				{props.desc}
			</p>
		</div>
	);
};

const CategoryItem = (props) => {
	const color = colors[Math.round(Math.random() * 4)];
	return (
		<div className={styles.categoryItem}>
			<Img
				key={props.id}
				containerStyle={classname(styles.categoryItem, color)}
				imgStyle={styles.categoryImg}
				source={props.image}
			/>
			<p className={classname(text.headline, styles.legendText)}>
				{props.desc}
			</p>
		</div>
	);
};

const getSettingsPreview = (width) => {
	return {
		className: "center",
		centerMode: true,
		infinite: true,
		// centerPadding: `-${0.065 * width}px`,
		//TODO: make center padding dynamic
		centerPadding: `-12%`,
		slidesToShow: 3,
		speed: 500,
		autoplay: true,
		nextArrow: <CustomRightArrow />,
		prevArrow: <CustomLeftArrow />,
		arrows: true,
		dots: true,
		appendDots: (dots) => (
			<div
				style={{
					borderRadius: "10px",
					padding: "0",
					display: "flex",
					flexDirection: "row",
					justifyContent: "flex-start",
				}}
			>
				<ul
					style={{
						margin: "0px",
						padding: "0px",
					}}
				>
					{dots}
				</ul>
			</div>
		),
	};
};

const settingsCategory = {
	speed: 500,
	infinite: true,
	className: "center",
	centerPadding: "70px",
	slidesToShow: 5,
	slidesToScroll: 2,
	nextArrow: <CustomRightArrow />,
	prevArrow: <CustomLeftArrow />,
	arrows: true,
};

const Carousel = (props) => {
	const { width, height } = useWindowDimensions();
	console.log(width, height);
	const settings =
		props.carouselType === "previewItem"
			? getSettingsPreview(width)
			: settingsCategory;
	return (
		<Slider {...settings}>
			{props.carouselType === "previewItem"
				? props.data.map((item, index) => {
						return <PreviewItem key={index} {...item} />;
				  })
				: props.data.map((item, index) => {
						return <CategoryItem key={index} {...item} />;
				  })}
		</Slider>
	);
};

Carousel.propTypes = {
	data: PropTypes.array,
	carouselType: PropTypes.string,
};

export default Carousel;
