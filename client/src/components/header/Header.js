import React from "react";
import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink,
	OptionDiv,
} from "./H.styles";
import { auth } from "../../firebase/firebase-utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ currentUser, hidden }) => {
	return (
		<HeaderContainer>
			<LogoContainer to="/">
				<p className="logo">
					<img
						src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/271/drop-of-blood_1fa78.png"
						style={{ height: "2em" }}
					/>
				</p>
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/shop">SHOP</OptionLink>
				<OptionLink to="/contact">CONTACT</OptionLink>
				{currentUser ? (
					<OptionDiv onClick={() => auth.signOut()}>
						SIGN OUT
					</OptionDiv>
				) : (
					<OptionLink to="/user">SIGN IN</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <CartDropdown />}
		</HeaderContainer>
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
