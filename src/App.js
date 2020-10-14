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
import MyBag from "./pages/MyBag/MyBag";
import CheckOut from "./pages/CheckOut/CheckOut";

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
					<RouteWithNavbar
						exact
						path="/mybag"
						component={MyBag}
					/>
					<RouteWithNavbar
						exact
						path="/checkout"
						component={CheckOut}
					/>
				</Switch>
			</Router>
		</>
	);
}

export default App;
