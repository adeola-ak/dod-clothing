import React from "react";
import "./CartDropdown.scss";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))}
			</div>
			<Button>CHECKOUT</Button>
		</div>
	);
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
