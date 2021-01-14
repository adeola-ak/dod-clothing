import React, { useState } from "react";
import "./SignIn.scss";
import FormInput from "../form-input/FormInput";
import Button from "../button/Button";
import { signInWithGoogle, auth } from "../../firebase/firebase-utils";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await auth.signInWithEmailAndPassword(email, password);
			setEmail("");
			setPassword("");
		} catch (error) {
			console.log(error);
		}
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	return (
		<div className="sign-in">
			<h2 className="title">Login</h2>
			<span>sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					value={email}
					label="email"
					onChange={handleEmailChange}
					required
				/>

				<FormInput
					name="password"
					type="password"
					value={password}
					label="password"
					onChange={handlePasswordChange}
					required
				/>
				<div className="buttons">
					<Button type="submit">Sign In</Button>
					<Button
						type="button"
						onClick={signInWithGoogle}
						googleSignIn
					>
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
