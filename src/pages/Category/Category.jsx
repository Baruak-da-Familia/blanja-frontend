import React from "react";
import PropTypes from "prop-types";
import Card from "../../components/Card/Card";
import styles from "./styles.module.css";
import classname from "../../helpers/classJoiner";
import text from "../../assets/text.module.css";
import { newData } from "../../utils/dummydata";

const Category = (props) => {
	return (
		<div className={styles.category}>
			<nav className={classname(styles.nav)}>
				<a className={classname(text.descriptiveItems)} href="/">
					Home
				</a>
				<ul className={styles.ul}>
					<li className={classname(text.descriptiveItems)}>
						{">"} <a href="/">Category</a>
					</li>
					<li className={classname(text.descriptiveItems)}>
						{">"} <a href="/">T-Shirt</a>
					</li>
				</ul>
			</nav>
			<h5 className={classname(text.headline, styles.title)}>T-Shirt</h5>
			<div className={classname("row", "no-gutters", styles.mt25)}>
				{newData.map((item) => {
					return <Card key={item.id} {...item} />;
				})}
			</div>
		</div>
	);
};

Category.propTypes = {
	route: PropTypes.string,
};

export default Category;
