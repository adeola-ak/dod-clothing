import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shoppage/ShopPage";
import Header from "./components/header/Header";
import SignInUp from "./pages/sign-in-up/sign-in-up";
import Checkout from "./pages/checkout/Checkout";
import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

function App(props) {
	const setCurrentUser = props.setCurrentUser;

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
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route path="/shop" component={ShopPage} />
				<Route exact path="/checkout">
					<Checkout />
				</Route>
				<Route
					exact
					path="/user"
					render={() =>
						props.currentUser ? <Redirect to="/" /> : <SignInUp />
					}
				></Route>
			</Switch>
		</div>
	);
}

// const mapStateToProps = ({ user }) => ({
// 	currentUser: user.currentUser,
// });

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
