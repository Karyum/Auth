import { combineReducers } from 'redux';
import fetchUserReducer from './fetch_user';
import loginUserReducer from './login_user';

const rootReducers = combineReducers({
  user: fetchUserReducer,
  loggedinUser: loginUserReducer,
});

export default rootReducers;
