import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
	return (
		<div className="header">
			<Link to="/" className="logo-container">
				<p className="logo">logo</p>
			</Link>
			<div className="options">
				<Link className="option" to="/">
					SHOP
				</Link>
				<Link className="option" to="/">
					CONTACT
				</Link>
			</div>
		</div>
	);
};

export default Header;
