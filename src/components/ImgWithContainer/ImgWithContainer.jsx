import React from "react";
import PropTypes from "prop-types";

const ImgWithContainer = (props) => {
	return (
		<div className={props.containerStyle} onClick={props.onClick}>
			<img source={props.source} className={props.imgStyle}></img>
		</div>
	);
};

ImgWithContainer.propTypes = {
	source: PropTypes.string,
	containerStyle: PropTypes.object,
	onClick: PropTypes.func,
	imgStyle: PropTypes.object,
};

export default ImgWithContainer;
