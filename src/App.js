import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from './pages/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';



function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact component={Login} />
					<Route path="/Register" exact component={Register} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
