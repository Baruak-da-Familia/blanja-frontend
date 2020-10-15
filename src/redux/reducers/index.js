import { combineReducers } from 'redux';
import authReducer from './auth';
import productReducer from './product';

const indexReducer = combineReducers({
    auth: authReducer,
    product: productReducer,
})

export default indexReducer;