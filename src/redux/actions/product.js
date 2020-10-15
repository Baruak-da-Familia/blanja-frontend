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

export const addToCart = (id, name, brand, qty, price, images) => {
   return {
      type: actions.ADD_TO_CART,
      payload: {
         id, name, brand, qty, price, images
      },
   };
};
