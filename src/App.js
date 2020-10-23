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
import ProductDetail from "./pages/PageProduct/PageProduct";
import Category from "./pages/Category/Category";
import Search from "./pages/Search/Search";
import MyBag from "./pages/MyBag/MyBag";
import Checkout from "./pages/CheckOut/CheckOut";
import PrivateRoute from "./components/Route/PrivateRoute";
import PublicRoute from "./components/Route/PublicRoute";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<PublicRoute path="/login" exact component={Login} />
					<PublicRoute path="/register" exact component={Register} />
					<PublicRoute
						exact
						path="/"
						enableNavbar={true}
						component={Home}
					/>
					<PrivateRoute
						enableNavbar={true}
						path="/chat"
						redirectPath="/login"
						component={Chat}
					/>
					<PrivateRoute
						exact
						enableNavbar={true}
						redirectPath="/login"
						path="/profile"
						component={Profile}
					/>
					<PrivateRoute
						exact
						enableNavbar={true}
						redirectPath="/login"
						path="/profileseller"
						component={ProfileSeller}
					/>
					<PublicRoute
						exact
						enableNavbar={true}
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
						enableNavbar={true}
						redirectPath="/login"
						path="/checkout"
						component={Checkout}
					/>
					<PublicRoute
						exact
						enableNavbar
						path="/product/detail/:id"
						component={ProductDetail}
					/>
				</Switch>
			</Router>
		</>
	);
}

export default App;