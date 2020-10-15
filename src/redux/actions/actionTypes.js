import { ActionType } from 'redux-promise-middleware';

export const AUTH_LOGIN_USER = 'authLoginUser'
export const AUTH_REGISTER_USER = 'authRegisterUser'
export const AUTH_LOGOUT_USER = 'authLogoutUser'
export const AUTH_RESET_PASSWORD = 'authResetPassword'
export const AUTH_RESET_FULLFILED = 'authResetFullfiled'

export const FETCH_ALL_PRODUCT = 'fetchAllProduct'
export const GET_PRODUCT_BY_ID = 'getProductById'
export const GET_PRODUCT_BY_SELLER_ID = 'getProductBySellerId'

export const INSERT_TRANSACTION = 'insertTransaction'

export const ADD_TO_CART = 'addToCart'
export const ADD_TO_CHECKOUT = 'addToCheckout'

export const PENDING = `_${ActionType.Pending}`;
export const FULFILLED = `_${ActionType.Fulfilled}`;
export const REJECTED = `_${ActionType.Rejected}`;