import * as actions from "./actionTypes";
import * as api from "../../utils/reqData";

export const transaction = (data) => {
   return {
      type: actions.INSERT_TRANSACTION,
      payload: api.doTransaction(data),
   };
};

export const fetchAllProduct = () => {
   return {
      type: actions.FETCH_ALL_PRODUCT,
      payload: api.fetchAllProduct(),
   };
};

export const getProductById = (id) => {
   return {
      type: actions.GET_PRODUCT_BY_ID,
      payload: api.getProductById(id),
   };
};

export const getProductBySellerId = (id) => {
   return {
      type: actions.GET_PRODUCT_BY_SELLER_ID,
      payload: api.getProductBySellerId(id),
   };
};

// export const addToCart = (id, name, brand, qty, price, images) => {
//    return {
//       type: actions.ADD_TO_CART,
//       payload: {
//          id, name, brand, qty, price, images
//       },
//    };
// };

export const addToCart = (data) => {
   return {
      type: actions.ADD_TO_CART,
      payload: data,
   };
};

// export const addToCheckout = (customer_id, seller_id, cart, address,) => {
//    return {
//       type: actions.ADD_TO_CHECKOUT,
//       payload: {
//          customer_id, seller_id, cart, address,
//       },
//    };
// };

export const addToCheckout = (data) => {
   return {
      type: actions.ADD_TO_CHECKOUT,
      payload: data.sendData,
   };
};

export const increaseQuantity = (id) => {
   return {
      type: actions.QUANTITY_INCREASED,
      payload: {
         id: id,
      }
   };
};

export const decreaseQuantity = (id) => {
   return {
      type: actions.QUANTITY_DECREASED,
      payload: {
         id: id,
      }
   };
};

export const clearCart = () => {
   return {
      type: actions.CLEAR_CART,
   }
};

export const clearCheckout = () => {
   return {
      type: actions.CLEAR_CHECKOUT,
   }
};

export const addPaymentMethod = (data) => {
   return {
      type: actions.ADD_PAYMENT_METHOD,
      payload: {
         data: data,
      }
   }
};