//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

export function SecondsCounter(props) {
	return (
		<div className="count">
			<div className="calendar">
				<i className="fas fa-clock"></i>
			</div>
			<div className="count4">{props.count4 % 10}</div>
			<div className="count3">{props.count3 % 10}</div>
			<div className="count2">{props.count2 % 10}</div>
			<div className="count1">{props.count1 % 10}</div>
		</div>
		// counter main
	);
}

SecondsCounter.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	count4: PropTypes.number,
	count3: PropTypes.number,
	count2: PropTypes.number,
	count1: PropTypes.number
};

let count = 0;
//render your react application
setInterval(function() {
	const c4 = Math.floor(count / 1000);
	const c3 = Math.floor(count / 100);
	const c2 = Math.floor(count / 10);
	const c1 = Math.floor(count / 1);
	count++;
	ReactDOM.render(
		<SecondsCounter count1={c1} count2={c2} count3={c3} count4={c4} />,
		document.querySelector("#app")
	);
}, 1000);
