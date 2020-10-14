import { combineReducers } from 'redux';
import authReducer from './auth';
import transactionReducer from './transaction';

const indexReducer = combineReducers({
    auth: authReducer,
    transaction: transactionReducer,
})

export default indexReducer;