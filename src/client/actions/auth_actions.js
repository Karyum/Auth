import axios from 'axios';
import { FETCH_USER, LOGOUT_USER } from '../constants';

export function fetchUser() {
  return dispatch => {
    dispatch({
      type: FETCH_USER,
      payload: axios.get('/verify')
    });
  };
}

export function logoutUser() {
  return dispatch => {
    dispatch({
      type: LOGOUT_USER,
      payload: axios.get('/logout')
    });
  };
}

export function loginUser(data) {
  return dispatch => {
    dispatch({
      type: FETCH_USER,
      payload: axios.post('/login', data)
    });
  };
}
