import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
	component: Component,
	enableNavbar,
	redirectPath,
	...rest
}) => {
	const { status, user } = useSelector((state) => state.auth);
	return (
		<>
			<Route
				{...rest}
				path={rest.path}
				render={(props) => {
					return (
						<>
							{status === 200 && user.token ? (
								<>
									{enableNavbar ? (
										<Navbar {...props} />
									) : null}
									<Component {...props} />{" "}
								</>
							) : (
								<Redirect
									to={{
										pathname: redirectPath,
										state: { from: props.location },
									}}
								/>
							)}
						</>
					);
				}}
			/>
		</>
	);
};

export default PrivateRoute;
