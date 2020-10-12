import Axios from 'axios';

export const authLoginCustomer = (data) => {
    return Axios.post(`http://localhost:8000/auth/login/customer`, data);
}

export const authLoginSeller = (data) => {
    return Axios.post(`http://localhost:8000/auth/login/seller`, data);
}

export const authRegisterCustomer = (data) => {
    return Axios.post(`http://localhost:8000/auth/register/customer`, data);
}
export const authRegisterSeller = (data) => {
    return Axios.post(`http://localhost:8000/auth/register/seller`, data);
}