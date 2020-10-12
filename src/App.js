import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';

function App() {
	return (
		<>
			<Navbar />
			<Router>
				<Switch>
					<Route path="/" exact component={Home} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
