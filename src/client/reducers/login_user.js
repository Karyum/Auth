import {
  LOGIN_USER_PENDING,
  LOGIN_USER_FULFILLED,
  LOGIN_USER_REJECTED,
} from '../constants';

const initialState = {
  userData: {},
  isFetching: false,
  dataFetched: false,
  error: false,
};

const loginUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_PENDING:
      return { ...state, isFetching: true };
    case LOGIN_USER_FULFILLED:
      return {
        isFetching: false,
        dataFetched: true,
        userData: action.payload.data,
      };
    case LOGIN_USER_REJECTED:
      return { ...state, isFetching: false, error: true };
    default:
      return state;
  }
};

export default loginUserReducer;
