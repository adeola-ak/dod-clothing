import React from "react";
import "./Button.scss";

const Button = ({ children, googleSignIn, inverted, ...otherProps }) => {
	return (
		<button
			className={`${inverted ? "inverted" : ""} ${
				googleSignIn ? "google-sign-in" : ""
			} custom-button`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
