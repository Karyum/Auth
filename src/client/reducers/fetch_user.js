import {
  FETCH_USER_PENDING,
  FETCH_USER_FULFILLED,
  FETCH_USER_REJECTED,
  LOGOUT_USER_PENDING,
  LOGOUT_USER_FULFILLED,
  LOGOUT_USER_REJECTED
} from '../constants';

const initialState = {
  data: {},
  error: false,
  isFetching: false
};

const fetchUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_PENDING:
      return { ...state, isFetching: true };
    case FETCH_USER_FULFILLED:
      return { ...state, data: action.payload.data };
    case FETCH_USER_REJECTED:
      return { ...state, isFetching: false, error: true };
    case LOGOUT_USER_PENDING:
      return { ...initialState, isFetching: true };
    case LOGOUT_USER_FULFILLED:
      return { ...initialState, loggedOut: true };
    case LOGOUT_USER_REJECTED:
      return { ...initialState, error: true };
    default:
      return state;
  }
};

export default fetchUserReducer;
