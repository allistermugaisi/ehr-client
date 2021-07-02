import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import AdornedButton from '../../../utils/AdornedButton';
import Input from '../../../utils/useInput';

const Login = ({ isSignUpMode }) => {
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

	const onSubmit = (data, e) => {
		e.preventDefault();
		setButtonLoading(true);
		console.log(data);
	};

	const handleShowPassword = () =>
		setShowPassword((prevShowPassword) => !prevShowPassword);

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="sign-in-form">
				<h2 className="title">Sign in</h2>
				<TextField
					{...register('email', {
						required: 'Email address is required!',
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
				<Input
					{...register('password', {
						required: 'Password is required!',
						minLength: {
							value: 8,
							message: 'Password should be atleast 8 characters',
						},
					})}
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
					Login
				</AdornedButton>
				<div>
					<p className="register-link">
						Don't have an account? &nbsp;
						<Link onClick={isSignUpMode} className="register-info" to="#">
							Get started
						</Link>
					</p>
				</div>
			</form>
		</>
	);
};

export default Login;
