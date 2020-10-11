import React from "react";
import PropTypes from "prop-types";
import Carousel from "../../components/Carousel/Carousel";
import Card from "../../components/Card/Card";
import styles from "./styles.module.css";
import classname from "../../helpers/classJoiner";
import text from "../../assets/text.module.css";
import { previewData, categoryData, newData } from "../../utils/dummydata";

const Home = (props) => {
	return (
		<main className={styles.home}>
			<div style={{ marginBottom: "50px" }}>
				<Carousel
					key="previewItem"
					carouselType="previewItem"
					data={previewData}
				/>
			</div>
			<div style={{ marginBottom: "50px" }}>
				<h1 className={text.headline}>Category</h1>
				<p
					className={classname(
						text.helperText,
						styles.marginbottom30
					)}
				>
					What are you currently looking for
				</p>
				<Carousel
					key="categoryItem"
					carouselType="categoryItem"
					data={categoryData}
				/>
			</div>
			<h1 className={text.headline}>New</h1>
			<p className={classname(text.helperText, styles.marginbottom30)}>
				You’ve never seen it before!
			</p>
			<div className="container-fluid px-0">
				<div
					className={classname(
						styles.marginbottom50,
						"row",
						"no-gutters"
					)}
				>
					{newData.map((item) => {
						return <Card key={item.id} {...item} />;
					})}
				</div>
			</div>
			<h1 className={text.headline}>Popular</h1>
			<p className={classname(text.helperText, styles.marginbottom30)}>
				Find clothes that are trending recently
			</p>
			<div className="container-fluid px-0">
				<div
					className={classname(
						"row",
						"no-gutters",
						"d-flex flex-row"
					)}
				>
					{newData.map((item) => {
						return <Card key={item.id} {...item} />;
					})}
				</div>
			</div>
		</main>
	);
};

Home.propTypes = {};

export default Home;
