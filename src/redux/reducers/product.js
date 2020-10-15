import * as actions from "../actions/actionTypes";

let invoice = Math.floor(Math.random() * 100001) + 1;
const initialState = {
   msg: '',
   status: '',
   product: [],
   carts: [],
   checkout: {
      "id": invoice,
      "customer_id": "",
      "seller_id": "",
      "amount": "",
      "payment_method": "",
      "address": "",
      "products": [],
   },
   productDetail: {},
   isPending: false,
   isFulfilled: false,
   isRejected: false,
};

const productReducer = (state = initialState, { type, payload }) => {
   let newCart = [...state.carts];
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
      case actions.ADD_PAYMENT_METHOD:
         return {
            ...state,
            checkout: {
               ...state.checkout,
               "payment_method": payload.data.data,
            }
         }
      case actions.ADD_TO_CART:
         return {
            ...state,
            carts: [...state.carts, payload],
         };
      case actions.ADD_TO_CHECKOUT:
         return {
            ...state,
            checkout: {
               ...state.checkout,
               "id": invoice,
               "customer_id": payload.data.customer_id,
               "seller_id": payload.data.seller_id,
               "amount": payload.data.cart.reduce((total, item) => { return total + (item.price * item.qty) }, 5),
               "payment_method": "",
               "address": payload.data.address,
               "products": payload.data.cart.map(item => {
                  return {
                     id: item.id,
                     qty: item.qty
                  }
               }),
            },
         };
      case actions.QUANTITY_INCREASED:
         const indexQtyInc = state.carts.findIndex((item) => {
            return payload.id === item.id;
         });
         newCart[indexQtyInc] = {
            ...newCart[indexQtyInc],
            quantity: state.carts[indexQtyInc].quantity + 1
         }
         return {
            ...state,
            carts: newCart,
         };
      case actions.QUANTITY_DECREASED:
         return {
            ...state,
            checkout: payload.data.data,
         };
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