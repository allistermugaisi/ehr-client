import axios from 'axios';
import {
	USER_LOADING,
	AUTH_USER,
	LOGIN_SUCCESS,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	VERIFY_EMAIL,
} from '../../constants/types';
import { API_URL } from './config';
import {
	returnErrors,
	clearErrors,
	loginFail,
	registerFail,
	emailVerifyFail,
} from './errors';

// Setup config headers and token

export const tokenConfig = () => {
	// Get token from localStorage
	const token = localStorage.getItem('token');
	// console.log(token);

	// Headers
	const config = {
		headers: {
			'content-Type': 'application/json',
		},
	};

	// if token, add to headers
	if (token) {
		config.headers['Authorization'] = `Bearer ${token}`;
	}

	return config;
};

// Check token and Auth user

export const auth = () => async (dispatch) => {
	const token = tokenConfig();

	try {
		const response = await axios.get(`${API_URL}/profile`, token);
		const data = await response.data;
		console.log(data);

		await dispatch({
			type: AUTH_USER,
			payload: data,
		});
	} catch (error) {
		console.log(error);
	}
};

// User loading
export const loading = () => {
	return {
		type: USER_LOADING,
	};
};

// Register User
export const registerUser = (payload) => async (dispatch) => {
	const { name, practice_name, email, phone, password, password_confirmation } =
		payload;

	try {
		// Headers
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const body = JSON.stringify({
			name,
			practice_name,
			email,
			phone,
			password,
			password_confirmation,
		});

		const response = await axios.post(
			`${API_URL}/api/v1/auth/signup`,
			body,
			config
		);
		console.log(response.data);
		await dispatch({
			type: REGISTER_SUCCESS,
			payload: response.data,
		});
		dispatch(clearErrors());
	} catch (error) {
		// console.log(error.response.data);
		dispatch(
			returnErrors(error.response.data, error.response.status, 'REGISTER_FAIL')
		);
		dispatch(registerFail());
	}
};

// Login User
export const loginUser = (payload) => async (dispatch) => {
	const { email, password } = payload;

	try {
		// Headers
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		// Request body
		const body = JSON.stringify({ email, password });

		const response = await axios.post(
			`${API_URL}/api/v1/auth/signin`,
			body,
			config
		);
		console.log(response.data);

		localStorage.setItem('userToken', response.data.token);
		await dispatch({
			type: LOGIN_SUCCESS,
			payload: response.data,
		});
		dispatch(clearErrors());
	} catch (error) {
		// console.log(error.response.data);
		dispatch(
			returnErrors(error.response.data, error.response.status, 'LOGIN_FAIL')
		);
		dispatch(loginFail());
	}
};

// Logout User
export const logOut = () => (dispatch) => {
	localStorage.removeItem('token');
	dispatch({
		type: LOGOUT_SUCCESS,
	});
};

export const verifyEmail = (payload) => async (dispatch) => {
	const { encoded } = payload;

	try {
		// Headers
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const data = {
			token: encoded,
		};

		// Request body
		const body = JSON.stringify({ data });

		const response = await axios.post(
			`${API_URL}/api/v1/auth/account/activate`,
			body,
			config
		);
		console.log(response.data);

		await dispatch({
			type: VERIFY_EMAIL,
			payload: response.data,
		});
		dispatch(clearErrors());
	} catch (error) {
		dispatch(
			returnErrors(
				error.response.data,
				error.response.status,
				'EMAIL_VERIFY_FAIL'
			)
		);
		dispatch(emailVerifyFail());
	}
};
