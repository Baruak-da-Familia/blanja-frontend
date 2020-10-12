import * as actions from "../actions/actionTypes";

const initialState = {
    customer: {},
    seller: {},
    isLogin: false,
    isPending: false,
    isFulfilled: false,
    isRejected: false,
};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.AUTH_LOGIN_CUSTOMER + actions.PENDING:
            return {
                ...state,
                isPending: true,
            };
        case actions.AUTH_LOGIN_CUSTOMER + actions.REJECTED:
            return {
                ...state,
                isRejected: true,
                customer: payload,
                isPending: false,
            };
        case actions.AUTH_LOGIN_CUSTOMER + actions.FULFILLED:
            // console.log(payload.data.data)
            return {
                ...state,
                isFulfilled: true,
                isPending: false,
                customer: payload.data.data,
                isRejected: false,
                isLogin: true,
            };
        case actions.AUTH_REGISTER_CUSTOMER + actions.PENDING:
            return {
                ...state,
                isPending: true,
            };
        case actions.AUTH_REGISTER_CUSTOMER + actions.REJECTED:
            return {
                ...state,
                isRejected: true,
                customer: payload,
                isPending: false,
            };
        case actions.AUTH_REGISTER_CUSTOMER + actions.FULFILLED:
            return {
                ...state,
                isFulfilled: true,
                isPending: false,
                customer: payload.data.data,
                isRejected: false,
                // isLogin: true,
            };


        case actions.AUTH_LOGOUT_CUSTOMER:
            return {
                customer: {},
                isLogin: false,
                isPending: false,
                isFulfilled: false,
                isRejected: false,
            }
        case actions.AUTH_LOGIN_SELLER + actions.PENDING:
            return {
                ...state,
                isPending: true,
            };
        case actions.AUTH_LOGIN_SELLER + actions.REJECTED:
            return {
                ...state,
                isRejected: true,
                seller: payload,
                isPending: false,
            };
        case actions.AUTH_LOGIN_SELLER + actions.FULFILLED:
            // console.log(payload.data.data)
            return {
                ...state,
                isFulfilled: true,
                isPending: false,
                seller: payload.data.data,
                isRejected: false,
                isLogin: true,
            };
        case actions.AUTH_REGISTER_SELLER + actions.PENDING:
            return {
                ...state,
                isPending: true,
            };
        case actions.AUTH_REGISTER_SELLER + actions.REJECTED:
            return {
                ...state,
                isRejected: true,
                seller: payload,
                isPending: false,
            };
        case actions.AUTH_REGISTER_SELLER + actions.FULFILLED:
            return {
                ...state,
                isFulfilled: true,
                isPending: false,
                seller: payload.data.data,
                isRejected: false,
                // isLogin: true,
            };
        case actions.AUTH_LOGOUT_SELLER:
            return {
                seller: {},
                isLogin: false,
                isPending: false,
                isFulfilled: false,
                isRejected: false,
            }
        default:
            return state;
    }
};

export default authReducer;