import * as actions from "./actionTypes";
import {
	authLoginCustomer,
	authLoginSeller,
	authRegisterCustomer,
	authRegisterSeller,
} from "../../utils/reqData";

export const authLoginCustomerCreator = (data) => {
	return {
		type: actions.AUTH_LOGIN_USER,
		payload: authLoginCustomer(data),
	};
};
export const authLoginSellerCreator = (data) => {
	return {
		type: actions.AUTH_LOGIN_USER,
		payload: authLoginSeller(data),
	};
};
export const authRegisterCustomerCreator = (data) => {
	return {
		type: actions.AUTH_REGISTER_USER,
		payload: authRegisterCustomer(data),
	};
};
export const authRegisterSellerCreator = (data) => {
	return {
		type: actions.AUTH_REGISTER_USER,
		payload: authRegisterSeller(data),
	};
};
