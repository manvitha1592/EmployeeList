import { combineReducers } from 'redux';
import { loginReducer } from './login';
import { employeeReducer } from './employee';

export const reducers = combineReducers({
  loginReducer: loginReducer,
  employeeReducer: employeeReducer,
});