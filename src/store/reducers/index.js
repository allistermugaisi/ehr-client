import { combineReducers } from 'redux';
import auth from './auth';
import error from './errors';

const rootReducer = combineReducers({
	auth,
	error,
});

export default rootReducer;
