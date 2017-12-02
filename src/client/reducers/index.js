import { combineReducers } from 'redux';
import fetchUserReducer from './fetch_user';

const rootReducers = combineReducers({
  user: fetchUserReducer
});

export default rootReducers;
