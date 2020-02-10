import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

function App() {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
