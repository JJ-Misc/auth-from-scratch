/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav.js";
import Home from "./components/Home";
import Secret from "./components/Secret";
import "bulma/css/bulma.min.css";
import "./styles/App.css";
import LogIn from "./components/LogIn2.js";

function App() {
	const appStyle = {
		margin: "2em",
		position: "relative",
		display: "flex",
		flexFlow: "column wrap",
	};

	return (
		<Router>
			<div className="App" style={appStyle}>
				<Nav />
				<LogIn />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/secret" component={Secret} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
