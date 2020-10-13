import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from './pages/Home';
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import Home from "./pages/Home/Home";
import Chat from "./pages/Chat/Chat";

function App() {
	return (
		<>
			<Navbar />
			<Chat />
			{/* <Router>
				<Switch>
					<Route path="/" exact component={Login} />
					<Route path="/Register" exact component={Register} />
				</Switch>
			</Router> */}
		</>
	);
}

export default App;
