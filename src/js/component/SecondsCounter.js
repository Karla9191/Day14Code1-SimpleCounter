import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export function SecondsC() {
	return (
		<div className="contador">
			<div className="count4">{props.count4 % 10}</div>
			<div className="count3">{props.count3 % 10}</div>
			<div className="count2">{props.count2 % 10}</div>
			<div className="count1">{props.count1 % 10}</div>
		</div>
	);
}

SecondsC.propTypes = {
	count4: PropTypes.number,
	count3: PropTypes.number,
	count2: PropTypes.number,
	count1: PropTypes.number
};
