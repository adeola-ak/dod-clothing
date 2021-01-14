import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shoppage/ShopPage";
import Header from "./components/header/Header";
import SignInUp from "./pages/sign-in-up/sign-in-up";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import { setCurrentUser } from "./redux/user/user.actions";

function App() {
	console.log(setCurrentUser);
	console.log(currentUser);
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						userData: snapShot.data(),
					});
				});
			} else {
				setCurrentUser(userAuth);
			}
		});

		return () => unsubscribe();
	}, []);
	// console.log(currentUser);
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route path="/shop">
					<ShopPage />
				</Route>
				<Route path="/user">
					<SignInUp />
				</Route>
			</Switch>
		</div>
	);
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
