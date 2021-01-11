import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shoppage/ShopPage";
import Header from "./components/header/Header";
import SignInUp from "./pages/sign-in-up/sign-in-up";
import { auth } from "./firebase/firebase-utils";

function App() {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			console.log(user);
		});

		return () => unsubscribe();
	}, []);

	return (
		<div className="App">
			<Header currentUser={currentUser} />
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

export default App;
