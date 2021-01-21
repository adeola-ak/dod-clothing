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
				<p className="logo">LOGO</p>
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to="/">SHOP</OptionLink>
				<OptionLink to="/">CONTACT</OptionLink>
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
