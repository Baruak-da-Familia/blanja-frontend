import * as actions from "../actions/actionTypes";
import {
  updateProfileCustomerCreator,
  addAddressCustomerCreator,
} from "../actions/auth";

const initialState = {
  user: {},
  errMsg: "",
  status: {},
  isLogin: false,
  isPending: false,
  isFulfilled: false,
  isRejected: false,

  errorUpdateCustomer: undefined,
  isUpdateCustomerPending: false,
  isUpdateCustomerFulFilled: false,
  isUpdateCustomerRejected: false,

  errorAddAddress: undefined,
  isAddAddressPending: false,
  isAddAddressFulFilled: false,
  isAddAddressRejected: false,
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
        };
      }
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        user: payload.data.data,
        errMsg: "",
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
    case actions.AUTH_LOGOUT_USER:
      return {
        user: {},
        isLogin: false,
        isPending: false,
        isFulfilled: false,
        isRejected: false,
      };

    case String(updateProfileCustomerCreator.pending):
      return {
        ...state,
        isUpdateCustomerPending: true,
      };
    case String(updateProfileCustomerCreator.fulfilled):
      return {
        ...state,
        user: { ...state.user, ...payload.data },
        errorUpdateCustomer: undefined,
        isUpdateCustomerPending: false,
        isUpdateCustomerFulFilled: true,
        isUpdateCustomerRejected: false,
      };
    case String(updateProfileCustomerCreator.rejected):
      return {
        ...state,
        errorUpdateCustomer: payload,
        isUpdateCustomerRejected: true,
        isUpdateCustomerPending: false,
        isUpdateCustomerFulFilled: false,
      };

    case String(addAddressCustomerCreator.pending):
      return {
        ...state,
        isAddAddressPending: true,
      };
    case String(addAddressCustomerCreator.fulfilled):
      return {
        ...state,
        user: { ...state.user, ...payload.data },
        errorAddAddress: undefined,
        isAddAddressPending: false,
        isAddAddressFulFilled: true,
        isAddAddressRejected: false,
      };
    case String(addAddressCustomerCreator.rejected):
      return {
        ...state,
        errorAddAddress: payload,
        isAddAddressRejected: true,
        isAddAddressPending: false,
        isAddAddressFulFilled: false,
      };
    default:
      return state;
  }
};

export default authReducer;
