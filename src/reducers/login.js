import { ACTION_TYPES } from '../actions';

const auth = JSON.parse(localStorage.getItem('auth'));

const isLoggedIn = auth ? auth.isLoggedIn : false;
const INITIAL_STATE = {
  isLoggedIn: isLoggedIn,
  isLoading: false,
  isError: false,
  errorMessage: '',
}

export const loginReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case ACTION_TYPES.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
      }
    case ACTION_TYPES.LOGIN_FAIURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      }
    case ACTION_TYPES.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      }
    default:
      return state;
  }
}