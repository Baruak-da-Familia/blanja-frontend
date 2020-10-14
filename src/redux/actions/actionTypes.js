import { ActionType } from 'redux-promise-middleware';

export const AUTH_LOGIN_USER = 'authLoginUser'
export const AUTH_REGISTER_USER = 'authRegisterUser'
export const AUTH_LOGOUT_USER = 'authLogoutUser'

export const INSERT_TRANSACTION = 'insertTransaction'

export const PENDING = `_${ActionType.Pending}`;
export const FULFILLED = `_${ActionType.Fulfilled}`;
export const REJECTED = `_${ActionType.Rejected}`;