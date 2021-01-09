import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/HomePage";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route path="/hats">
					<HomePage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
