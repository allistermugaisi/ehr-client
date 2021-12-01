import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { verifyEmail } from '../../store/actions/auth';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const EmailVerify = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();

	const query = useQuery();
	const token = query.get('encrypted');

	let error = useSelector((state) => state.error);
	let isEmailVerified = useSelector((state) => state.auth.isEmailVerified);
	let { from } = location.state || { from: { pathname: '/auth/signin' } };

	const verifyEmailToken = async () => {
		let data = { token };
		await dispatch(verifyEmail(data));
	};

	useEffect(() => {
		if (token) {
			verifyEmailToken();
		}
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		// Check for register error
		if (error.id === 'EMAIL_VERIFY_FAIL') {
			// set error toast notification
			// setMsg(error.msg.msg);
		} else {
			// setMsg(null);
		}
	}, [error]);

	useEffect(() => {
		if (isEmailVerified) {
			history.replace(from);
		}
		// eslint-disable-next-line
	}, [isEmailVerified]);

	return (
		<div
			style={{
				paddingTop: '50px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{isEmailVerified ? (
				<>
					<h2>Your Email is address is verified successfully.</h2>
					<h4>
						You now have an AfyaEHR Account. Please proceed to login page.
					</h4>
				</>
			) : (
				<h2>An error occurred during Email Verification</h2>
			)}
		</div>
	);
};

export default EmailVerify;
