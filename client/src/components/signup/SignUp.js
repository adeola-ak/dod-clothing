import React, { useState } from "react";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import { auth, createUserProfileDocument } from "../../firebase/firebase-utils";
import "./SignUp.scss";

const SignUp = () => {
	const [displayName, setDisplayName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const handleDisplayNameChange = (event) => {
		setDisplayName(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleConfirmPasswordChange = (event) => {
		setConfirmPassword(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords do not match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });
			setDisplayName("");
			setEmail("");
			setPassword("");
			setConfirmPassword("");
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="sign-up">
			<h2 className="title">I do not have an account</h2>
			<span>sign up with your email and password</span>
			<form className="sign-up-form" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleDisplayNameChange}
					label="Display Name"
					required
				/>

				<FormInput
					type="email"
					name="email"
					value={email}
					onChange={handleEmailChange}
					label="Email"
					required
				/>

				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={handlePasswordChange}
					label="Password"
					required
				/>

				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					onChange={handleConfirmPasswordChange}
					label="Confirm Password"
					required
				/>
				<Button type="submit">Sign Up</Button>
			</form>
		</div>
	);
};

export default SignUp;
