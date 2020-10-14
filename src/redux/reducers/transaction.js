import * as actions from "../actions/actionTypes";

const initialState = {
   msg: '',
   status: '',
   isPending: false,
   isFulfilled: false,
   isRejected: false,
};

const transactionReducer = (state = initialState, { type, payload }) => {
   switch (type) {
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

export default transactionReducer;