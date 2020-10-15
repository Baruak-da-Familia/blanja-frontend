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
import Category from "./pages/Category/Category";
import Search from "./pages/Search/Search";
import MyBag from "./pages/MyBag/MyBag";
import Checkout from "./pages/CheckOut/CheckOut";
import ResetPassword from "./pages/Auth/ResetPassword";
import EmailInput from "./pages/Auth/EmailInput";

function RouteWithNavbar({ component: Component, ...rest }) {
	return (
		<>
			<Route
				{...rest}
				path={rest.path}
				render={(props) => {
					return (
						<>
							<Navbar {...props} />
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
					<Route path="/EmailInput" exact component={EmailInput} />
					<Route path="/ResetPassword" exact component={ResetPassword} />
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
						path="/category/:id"
						component={Category}
					/>

					<PublicRoute
						exact
						enableNavbar={true}
						path="/search"
						component={Search}
					/>
					<PublicRoute
						exact
						enableNavbar={true}
						path="/mybag"
						component={MyBag}
					/>
					<PrivateRoute

						exact
						path="/checkout"
						component={Checkout}
					/>
				</Switch>
			</Router>
		</>
	);
}

export default App;
