import { ACTION_TYPES } from './index';

import { store } from '../store';

export const loginUserAction = (username, password, history) => {
  store.dispatch({
    type: ACTION_TYPES.LOGIN_REQUEST,
  });
  if(
    username === 'hruday@gmail.com' &&
    password === 'hruday123'
  ) {
    store.dispatch({
      type: ACTION_TYPES.LOGIN_SUCCESS,
    });
    console.log('in success');
    const auth = {
      isLoggedIn: true,
    }
    localStorage.setItem('auth', JSON.stringify(auth));
    history.push('/employees');
  } else {
    store.dispatch({
      type: ACTION_TYPES.LOGIN_FAIURE,
      payload: 'Incorrect username or password',
    });
    alert('Incorrect');
  }
}

export const logoutAction = () => {
  store.dispatch({
    type: ACTION_TYPES.LOGOUT,
  });
  localStorage.removeItem('auth');
}