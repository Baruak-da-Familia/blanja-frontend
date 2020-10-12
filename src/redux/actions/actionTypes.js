import { ActionType } from 'redux-promise-middleware';

export const AUTH_LOGIN_CUSTOMER = 'authLoginCustomer'
export const AUTH_LOGIN_SELLER = 'authLoginSeller'
export const AUTH_REGISTER_CUSTOMER = 'authRegisterCustomer'
export const AUTH_REGISTER_SELLER = 'authRegisterSeller'
export const AUTH_LOGOUT_CUSTOMER = 'authLogoutCustomer'
export const AUTH_LOGOUT_SELLER = 'authLogoutCustomer'


export const PENDING = `_${ActionType.Pending}`;
export const FULFILLED = `_${ActionType.Fulfilled}`;
export const REJECTED = `_${ActionType.Rejected}`;