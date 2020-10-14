import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Chat from "./pages/Chat/Chat";
import Profile from "./pages/Profile";
import ProfileSeller from "./pages/ProfileSeller";

function RouteWithNavbar({ component: Component, ...rest }) {
	return (
		<>
			<Route
				{...rest}
				path={rest.path}
				render={(props) => {
					return (
						<>
							<Navbar />
							<Component {...props} />
						</>
					);
				}}
			/>
		</>
	);
}

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/login" exact component={Login} />
					<Route path="/Register" exact component={Register} />
					<RouteWithNavbar exact path="/" component={Home} />
					<RouteWithNavbar exact path="/chat" component={Chat} />
					<RouteWithNavbar
						exact
						path="/profile"
						component={Profile}
					/>
					<RouteWithNavbar
						exact
						path="/profileseller"
						component={ProfileSeller}
					/>
				</Switch>
			</Router>
		</>
	);
}

export default App;
