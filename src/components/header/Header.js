import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { auth } from "../../firebase/firebase-utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ currentUser, hidden }) => {
	return (
		<div className="header">
			<Link to="/" className="logo-container">
				<p className="logo">LOGO</p>
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
				<CartIcon />
			</div>
			{hidden ? null : <CartDropdown />}{" "}
		</div>
	);
};

//destructuring nested values. take state out of the parenthesis :

// const mapStateToProps = (state) => ({
// 	currentUser: state.user.currentUser,
// });

//replace with:

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
// 	currentUser,
// 	hidden,
// });

//using structured selector to avoid listing every single selector with repetitive code:

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
