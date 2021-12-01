import {
	AUTH_USER,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	VERIFY_EMAIL,
} from '../../constants/types';

const initialState = {
	isAuthenticated: !!localStorage.getItem('userToken'),
	isEmailVerified: false,
	isAdmin: false,
	isLoading: false,
	user: null,
};

export default function AuthReducer(state = initialState, action) {
	switch (action.type) {
		case USER_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case AUTH_USER:
			return {
				...state,
				isAuthenticated: true,
				isAdmin: false,
				isLoading: false,
				user: action.payload,
			};
		case VERIFY_EMAIL:
			return {
				isEmailVerified: true,
			};
		case LOGIN_SUCCESS:
		case REGISTER_SUCCESS:
			return {
				...state,
				...action.payload,
				isAuthenticated: true,
				isAdmin: false,
				isLoading: false,
			};
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT_SUCCESS:
		case REGISTER_FAIL:
			return {
				...state,
				user: null,
				isAuthenticated: false,
				isAdmin: false,
				isLoading: false,
			};
		default:
			return state;
	}
}
