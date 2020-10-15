import * as actions from "./actionTypes";
import {
	authLoginCustomer,
	authLoginSeller,
	authRegisterCustomer,
	authRegisterSeller,
	resetPasswordCustomer,
	sendEmailCustomer,
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
export const authResetPasswordCustomer = (data) => {
	return {
		type: actions.AUTH_RESET_PASSWORD,
		payload: sendEmailCustomer(data),
	};
};
export const authResetPasswordCustomerFullf = (data) => {
	return {
		type: actions.AUTH_RESET_FULLFILED,
		payload: resetPasswordCustomer(data),
	};
};

