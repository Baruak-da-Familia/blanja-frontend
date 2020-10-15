import * as actions from "../actions/actionTypes";

const initialState = {
   msg: '',
   status: '',
   product: [],
   productDetail: {},
   isPending: false,
   isFulfilled: false,
   isRejected: false,
};

const productReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case actions.GET_PRODUCT_BY_ID + actions.PENDING:
         return {
            ...state,
            isPending: true,
         };
      case actions.GET_PRODUCT_BY_ID + actions.REJECTED:
         return {
            ...state,
            isPending: false,
            isRejected: true,
            isFulfilled: false,
            status: payload.data.status,
            // msg: payload.data.data.msg,
         };
      case actions.GET_PRODUCT_BY_ID + actions.FULFILLED:
         return {
            ...state,
            productDetail: payload.data.data,
            isPending: false,
            isRejected: true,
            isFulfilled: true,
            // status: payload.data.data.msg,

         }
      // ------------------------------------------------------------------------------------

      case actions.FETCH_ALL_PRODUCT + actions.PENDING:
         return {
            ...state,
            isPending: true,
         };
      case actions.FETCH_ALL_PRODUCT + actions.REJECTED:
         return {
            ...state,
            isPending: false,
            isRejected: true,
            isFulfilled: false,
            status: payload.data.status,
            // msg: payload.data.data.msg,
         };
      case actions.FETCH_ALL_PRODUCT + actions.FULFILLED:
         if (payload.data.status === 200) {
            return {
               ...state,
               isPending: false,
               isFulfilled: true,
               product: payload.data.data
               // status: payload.data.data.msg,
            };
         } else {
            return {
               ...state,
               isPending: false,
               isRejected: true,
               isFulfilled: true,
               // status: payload.data.data.msg,
            }
         }
      // ------------------------------------------------------------------------------------
      case actions.INSERT_TRANSACTION + actions.PENDING:
         return {
            ...state,
            isPending: true,
         };
      case actions.INSERT_TRANSACTION + actions.REJECTED:
         return {
            ...state,
            isPending: false,
            isRejected: true,
            isFulfilled: false,
            status: payload.data.status,
            msg: payload.data.data.msg,
         };
      case actions.INSERT_TRANSACTION + actions.FULFILLED:
         if (payload.data.status === 200) {
            return {
               ...state,
               isPending: false,
               isFulfilled: true,
               status: payload.data.data.msg,
            };
         } else {
            return {
               ...state,
               isPending: false,
               isRejected: true,
               isFulfilled: true,
               // status: payload.data.data.msg,
            }
         }
      default:
         return state;
   };
};

export default productReducer;