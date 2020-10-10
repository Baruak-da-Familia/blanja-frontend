import React from "react";
import PropTypes from "prop-types";

const Img = (props) => {
	return (
		<div className={props.containerStyle} onClick={props.onClick}>
			<img src={props.source} className={props.imgStyle} alt="" />
		</div>
	);
};

Img.propTypes = {
	source: PropTypes.string,
	containerStyle: PropTypes.string,
	imgStyle: PropTypes.string,
	onClick: PropTypes.func,
};

export default Img;
