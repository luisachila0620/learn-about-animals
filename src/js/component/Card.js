import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card col-4">
			<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<img src={props.image} alt="Avatar" className="card-img-top w-100" />
						<h5 className="card-titles">{props.name}</h5>
					</div>
					<div className="flip-card-back">
						<h1>{props.name}</h1>
						<p>{props.description}</p>
						<a className="aa" href={props.link}>
							to learn more click here!
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string,
	description: PropTypes.string,
	link: PropTypes.string
};
