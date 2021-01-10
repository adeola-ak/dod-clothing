import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shoppage/ShopPage";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route path="/shop">
					<ShopPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
