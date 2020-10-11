import React from "react";
import PropTypes from "prop-types";
import Img from "../ImgWithContainer/ImgWithContainer";
import classname from "../../helpers/classJoiner";
import star from "../../assets/img/Star.png";
import styles from "./styles.module.css";
import text from "../../assets/text.module.css";

const Rating = (props) => {
	const _rate = [...Array(props.rate).keys()];
	return (
		<div className={styles.ratingContainer}>
			{_rate.map((item, index) => {
				return (
					<Img
						key={index}
						source={star}
						containerStyle={styles.star}
						imgStyle={styles.starImg}
					/>
				);
			})}
			<p className={classname(text.helperText, styles.ratingText)}>
				(10)
			</p>
		</div>
	);
};

Rating.propTypes = {
	rate: PropTypes.number,
};

const Card = (props) => {
	return (
		<div
			className={classname(
				"col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2 mr-5",
				styles.marginRight25
			)}
		>
			<div className={styles.cardContainer}>
				<Img
					source={props.img}
					containerStyle={styles.cardImgContainer}
					imgStyle={styles.cardImg}
				/>
				<div className={styles.textContainer}>
					<h5 className={classname(text.text, styles.name)}>
						{props.name}
					</h5>
					<p className={classname(text.text, styles.price)}>
						Rp{Number(props.price).toLocaleString("id-ID")}
					</p>
					<p className={classname(text.helperText, styles.category)}>
						{props.category}
					</p>
					<Rating rate={props.rate} />
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	id: PropTypes.number,
	img: PropTypes.string,
	name: PropTypes.string,
	price: PropTypes.string,
	category: PropTypes.string,
	rate: PropTypes.number,
};

export default Card;
