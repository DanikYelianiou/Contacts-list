import { combineReducers } from 'redux';
import userReducer from './User/reducers';

export const appReducers = {
  user: userReducer,
};

const rootReducer = combineReducers({ ...appReducers });

export default rootReducer;
