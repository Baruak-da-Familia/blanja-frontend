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

export const doTransaction = (data) => {
	return Axios.post(`http://localhost:8000/order`, data);
};

export const fetchAllProduct = (category, name) => {
	if (category && name) {
		return Axios.get(
			`http://localhost:8000/?name=${name}&brand=&category=${category}&page=1&limit=60`
		);
	} else if (category) {
		return Axios.get(
			`http://localhost:8000/?name=&brand=&category=${category}&page=1&limit=60`
		);
	} else if (name) {
		return Axios.get(
			`http://localhost:8000/?name=${name}&brand=${name}&category=&page=1&limit=60`
		);
	} else {
		return Axios.get(
			`http://localhost:8000/?name=&brand=&category=&page=1&limit=60`
		);
	}
};

export const getProductById = (id) => {
	return Axios.get(`http://localhost:8000/product/${id}`);
};

export const getProductBySellerId = (id) => {
	return Axios.get(`http://localhost:8000/product/seller/${id}`);
};
