import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';

import { registerUser } from '../../../store/actions/auth';
import AdornedButton from '../../../utils/AdornedButton';
import Input from '../../../utils/useInput';

const Register = ({ isSignUpMode }) => {
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();

	let error = useSelector((state) => state.error);
	let isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	let { from } = location.state || { from: { pathname: '/auth/signin' } };

	const [showPassword, setShowPassword] = useState(false);
	const [buttonLoading, setButtonLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'all',
		shouldUnregister: true,
		shouldFocusError: true,
	});

	const onSubmit = async (data, e) => {
		e.preventDefault();
		setButtonLoading(true);

		const { name, practice_name, email, phone, password } = data;

		const payload = {
			name,
			practice_name,
			email,
			phone,
			password,
			password_confirmation: password,
		};
		await dispatch(registerUser(payload));
	};

	const handleShowPassword = () =>
		setShowPassword((prevShowPassword) => !prevShowPassword);

	useEffect(() => {
		// Check for register error
		if (error.id === 'REGISTER_FAIL') {
			setButtonLoading(false);
			// set error toast notification
			// setMsg(error.msg.msg);
		} else {
			// setMsg(null);
			setButtonLoading(false);
		}
	}, [error]);

	useEffect(() => {
		if (isAuthenticated) {
			history.replace(from);
			isSignUpMode();
		}
		// eslint-disable-next-line
	}, [isAuthenticated]);
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="sign-up-form">
				<h2 className="title">Sign up</h2>
				<TextField
					{...register('name', {
						required: 'Your Name is required!',
						shouldFocus: true,
					})}
					name="name"
					type="text"
					variant="outlined"
					label="Your Name"
					margin="normal"
					autoComplete="off"
					fullWidth
					error={errors?.name ? true : false}
					helperText={errors?.name?.message}
				/>
				<TextField
					{...register('practice_name', {
						required: 'Practice Name is required!',
						shouldFocus: true,
					})}
					name="practice_name"
					type="text"
					variant="outlined"
					label="Practice Name"
					margin="normal"
					autoComplete="off"
					fullWidth
					error={errors?.practice_name ? true : false}
					helperText={errors?.practice_name?.message}
				/>
				<TextField
					{...register('email', {
						required: 'Email address id is required!',
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: 'Invalid email address',
						},
						shouldFocus: true,
					})}
					name="email"
					type="email"
					variant="outlined"
					label="Email address"
					margin="normal"
					autoComplete="off"
					fullWidth
					error={errors?.email ? true : false}
					helperText={errors?.email?.message}
				/>
				<TextField
					{...register('phone', {
						required: 'Mobile number is required!',
						// pattern: {
						// 	value: /^\+[0-9]{1,3}\.[0-9]{4,14}(?:x.+)?$,
						// 	message: 'Please enter a valid mobile number',
						// },
					})}
					label="Mobile number"
					placeholder="401 302 2343"
					name="phone"
					type="number"
					margin="normal"
					variant="outlined"
					autoComplete="off"
					fullWidth
					error={errors?.phone ? true : false}
					helperText={errors?.phone?.message}
				/>
				<Input
					{...register('password', {
						required: 'Password is required!',
						minLength: {
							value: 8,
							message: 'Password should be atleast 8 characters',
						},
					})}
					ref={null}
					name="password"
					type={showPassword ? 'text' : 'password'}
					label="Password"
					margin="normal"
					handleShowPassword={handleShowPassword}
					autoComplete="off"
					error={errors?.password ? true : false}
					helperText={errors?.password?.message}
				/>
				<AdornedButton
					fullWidth
					disableElevation
					size="large"
					type="submit"
					color="primary"
					style={{ marginTop: '1rem' }}
					disabled={buttonLoading ? true : false}
					loading={buttonLoading}
					variant="contained"
				>
					Register
				</AdornedButton>
				<div>
					<p className="register-link">
						Already have an account? &nbsp;
						<Link onClick={isSignUpMode} className="register-info" to="#">
							Sign in
						</Link>
					</p>
				</div>
			</form>
		</>
	);
};

export default Register;
