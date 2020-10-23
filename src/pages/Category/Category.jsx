import React from "react";
import PropTypes from "prop-types";
import Card from "../../components/Card/Card";
import styles from "./styles.module.css";
import classname from "../../helpers/classJoiner";
import text from "../../assets/text.module.css";
import { newData, categoryData } from "../../utils/dummydata";
import { fetchAllProduct } from "../../redux/actions/product";
import { useDispatch, useSelector } from "react-redux";

const Category = (props) => {
	const currentPath = props.location.pathname;
	const dispatch = useDispatch();
	const stateProduct = useSelector((state) => state.product.product);
	const onClickHandler = (id) => {
		props.history.push(`/detail/${id}`);
	};

	React.useEffect(() => {
		dispatch(fetchAllProduct(Number(props.match.params.id)));
	}, [dispatch]);

	const idx = categoryData.findIndex((item) => {
		return item.id === Number(props.match.params.id);
	});

	React.useEffect(() => {
		document.title = categoryData[idx].name + " | Blanja";
	}, []);

	return (
		<div className={styles.category}>
			<nav className={classname(styles.nav)}>
				<a className={classname(text.descriptiveItems)} href="/">
					Home
				</a>
				<ul className={styles.ul}>
					<li className={classname(text.descriptiveItems)}>
						{">"} <a href={`${currentPath}`}>Category</a>
					</li>
					<li className={classname(text.descriptiveItems)}>
						{">"}{" "}
						<a href={`${currentPath}`}>{categoryData[idx].name}</a>
					</li>
				</ul>
			</nav>
			<h5 className={classname(text.headline, styles.title)}>
				{categoryData[idx].name}
			</h5>
			<div className={classname("row", "no-gutters", styles.mt25)}>
				{stateProduct.map((item) => {
					return (
						<Card
							key={item.id}
							{...item}
							onClickProp={onClickHandler}
						/>
					);
				})}
			</div>
		</div>
	);
};

Category.propTypes = {
	route: PropTypes.string,
};

export default Category;
