import Axios from "axios";

export const authLoginCustomer = (data) => {
  return Axios.post(`http://localhost:8000/auth/login/customer`, data);
};

export const authLoginSeller = (data) => {
  return Axios.post(`http://localhost:8000/auth/login/seller`, data);
};

export const authRegisterCustomer = (data) => {
  return Axios.post(`http://localhost:8000/auth/register/customer`, data);
};
export const authRegisterSeller = (data) => {
  return Axios.post(`http://localhost:8000/auth/register/seller`, data);
};
export const updateProfileCustomer = (id, body) => {
  return Axios.patch(`http://localhost:8000/customer/${id}`, body, {
    headers: {
      "content-type": "multipart/form-data",
      contentType: false,
      mimeType: "multipart/form-data",
      "cache-control": "no-cache",
      accept: "application/json",
    },
  });
};

export const addAddressCustomer = (id, data) => {
  return Axios.patch(`http://localhost:8000/customer-address/${id}`, data);
};

export const addProduct = (body) => {
  return Axios.post(`http://localhost:8000/product`, body, {
    headers: {
      "content-type": "multipart/form-data",
      contentType: false,
      mimeType: "multipart/form-data",
      "cache-control": "no-cache",
      accept: "application/json",
    },
  });
};

export const authRegisterSeller = (data) => {
  return Axios.post(`http://localhost:8000/auth/register/seller`, data);
};

export const doTransaction = (data) => {
  return Axios.post(`http://localhost:8000/order`, data);
};

export const fetchAllProduct = () => {
  return Axios.get(
    `http://localhost:8000/?name=&brand=&category=&page=1&limit=60`
  );
};

export const getProductById = (id) => {
  return Axios.get(`http://localhost:8000/product/${id}`);
};

export const getProductBySellerId = (id) => {
  return Axios.get(`http://localhost:8000/product/seller/${id}`);
};
