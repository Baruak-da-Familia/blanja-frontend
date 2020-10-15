import * as actions from "../actions/actionTypes";

const initialState = {
    user: {},
    errMsg: '',
    status: {},
    userAddress: {},
    reset: {},
    resetPass: {},
    isLogin: false,
    isPending: false,
    isFulfilled: false,
    isRejected: false,
};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.AUTH_LOGIN_USER + actions.PENDING:
            return {
                ...state,
                isPending: true,
            };
        case actions.AUTH_LOGIN_USER + actions.REJECTED:
            return {
                ...state,
                isRejected: true,
                user: payload,
                isPending: false,
            };
        case actions.AUTH_LOGIN_USER + actions.FULFILLED:
            if (payload.data.success === false) {
                return {
                    ...state,
                    status: payload.data.status,
                    errMsg: payload.data.error.msg,
                }
            }
            let address1 = payload.data.data.recipient_name
            let address2 = payload.data.data.address
            let newAdd = address1.concat(' ', address2, ' ')
            let address3 = payload.data.data.city_of_subdistrict
            let newAdd1 = newAdd.concat(address3, ' ')
            let address4 = payload.data.data.postal_code
            let newAdd2 = newAdd1.concat(address4)

            return {
                ...state,
                isFulfilled: true,
                isPending: false,
                user: payload.data.data,
                userAddress: newAdd2,
                errMsg: '',
                status: payload.data.status,
                isRejected: false,
                isLogin: true,
            };
        case actions.AUTH_REGISTER_USER + actions.PENDING:
            return {
                ...state,
                isPending: true,
            };
        case actions.AUTH_REGISTER_USER + actions.REJECTED:
            return {
                ...state,
                isRejected: true,
                user: payload,
                isPending: false,
            };
        case actions.AUTH_REGISTER_USER + actions.FULFILLED:
            return {
                ...state,
                isFulfilled: true,
                isPending: false,
                user: payload.data.data,
                isRejected: false,
                // isLogin: true,
            };
        case actions.AUTH_RESET_PASSWORD + actions.PENDING:
            return {
                ...state,
                isPending: true,
            };
        case actions.AUTH_RESET_PASSWORD + actions.REJECTED:
            return {
                ...state,
                isRejected: true,
                user: payload,
                isPending: false,
            };
        case actions.AUTH_RESET_PASSWORD + actions.FULFILLED:
            return {
                ...state,
                isFulfilled: true,
                isPending: false,
                reset: payload.data.data,
                isRejected: false,
                // isLogin: true,
            };
        case actions.AUTH_RESET_FULLFILED + actions.PENDING:
            return {
                ...state,
                isPending: true,
            };
        case actions.AUTH_RESET_FULLFILED + actions.REJECTED:
            return {
                ...state,
                isRejected: true,
                user: payload,
                isPending: false,
            };
        case actions.AUTH_RESET_FULLFILED + actions.FULFILLED:
            return {
                ...state,
                isFulfilled: true,
                isPending: false,
                resetPass: payload.data.data,
                isRejected: false,
                // isLogin: true,
            };
        case actions.AUTH_LOGOUT_USER:
            return {
                user: {},
                errMsg: '',
                status: {},
                userAddress: {},
                resetPass: {},
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