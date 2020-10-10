import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css"; // Import css modules stylesheet as styles

const SearchBar = (props) => {
	return (
		<div className={styles.searchContainer}>
			<input className={styles.searchInput} ref={props.refProp}></input>
		</div>
	);
};

SearchBar.propTypes = {
	// Either a function
	refProp: PropTypes.oneOfType([
		// Either a function
		PropTypes.func,
		// Or the instance of a DOM native element (see the note about SSR)
		PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
	]),
};

export default SearchBar;
