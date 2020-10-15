import React from "react";
import PropTypes from "prop-types";
import Img from "../ImgWithContainer/ImgWithContainer";
import classname from "../../helpers/classJoiner";
import star from "../../assets/img/Star.png";
import styles from "./styles.module.css";
import text from "../../assets/text.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/actions/product";

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
				{/* ini dummy bro */}
				(10)
			</p>
		</div>
	);
};

Rating.propTypes = {
	rate: PropTypes.number,
};

const Card = (props) => {
	const dispatch = useDispatch();

	// const stateProduct = useSelector(state => state.product.product);

	return (
		<div
			className={classname(
				"col-6 col-sm-6 col-md-2 col-lg-2 col-xl-2",
				styles.mr37
			)}
		>
			<div
				className={styles.cardContainer}
				onClick={() => {
					if (props.onClickProp) {
						props.onClickProp(props.id);
						dispatch(getProductById(props.id));
					}
				}}
			>
				<Img
					source={`http://localhost:8000${props.images[0]}`}
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
						{props.seller_name}
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
	seller_name: PropTypes.string,
	rate: PropTypes.number,
	onClickProp: PropTypes.func,
};

export default Card;
