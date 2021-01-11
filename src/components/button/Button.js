import React from "react";
import "./Button.scss";

const Button = ({ children, googleSignIn, ...otherProps }) => {
	return (
		<button
			className={`${googleSignIn ? "google-sign-in" : ""} custom-button`}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
