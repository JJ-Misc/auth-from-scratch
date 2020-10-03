/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav.js";
import Home from "./components/Home";
import Secret from "./components/Secret";
import "bulma/css/bulma.min.css";
import "./styles/App.css";
import Form from "./components/form/FormWrapper.js";
import Input from "./components/form/FormInput.js";

function App() {
	const appStyle = {
		margin: "2em",
		position: "relative",
		display: "flex",
		flexFlow: "column wrap",
	};

	const initialValues = {
		fName: "",
		lName: "",
		email: "",
		password: "",
		confirmPassword: ""
	};

	const submitHandler = e => console.log("Someone pressed submit");

	return (
		<Router>
			<div className="App" style={appStyle}>
				<Nav />
				
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/secret" component={Secret} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
