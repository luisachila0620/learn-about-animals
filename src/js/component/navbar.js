import React from "react";
import { Link } from "react-router-dom";
import trns from "../../img/Logo-1.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark d-flex juistify-content-end">
			<img src={trns} className="logo"></img>
			<div></div>
			<div className="ml-auto">
				<Link to="/Contenido">
					<button className="nav-button">Back</button>
				</Link>
				<Link to="/">
					<button className="secnav-button">Home</button>
				</Link>
			</div>
		</nav>
	);
};
