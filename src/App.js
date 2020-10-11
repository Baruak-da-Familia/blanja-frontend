import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
	return (
		<>
			<Navbar isLoggedIn={false} token={"test"} />
			<Home />
		</>
	);
}

export default App;
