import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { auth } from "../../firebase/firebase-utils";

const Header = ({ currentUser }) => {
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
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/user">
						SIGN IN
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
