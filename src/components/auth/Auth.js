import React, { useState } from 'react';
import { Login, Register } from './forms';
import LoginSVG from '../../assets/images/login.svg';
import RegisterSVG from '../../assets/images/register.svg';
import './css/Auth.css';

const Auth = () => {
	const [isSignup, setIsSignup] = useState(false);

	const isSignUpMode = () => setIsSignup((prev) => !prev);

	return (
		<>
			<div className={isSignup ? 'container sign-up-mode' : 'container'}>
				<div className="forms-container">
					<div className="signin-signup">
						<Login isSignUpMode={isSignUpMode} />
						<Register isSignUpMode={isSignUpMode} />
					</div>
				</div>

				<div className="panels-container">
					<div className="panel left-panel">
						<div className="content">
							<h3>Welcome back!</h3>
							<p>
								We are happy to see you again, kindly fill in the required
								credentials to enable successful login.
							</p>
						</div>
						<img src={LoginSVG} className="image" alt="login-svg" />
					</div>
					<div className="panel right-panel">
						<div className="content">
							<h3>Join Us today?</h3>
							<p>Welcome to Afya EHR sign up page. We wish to have on board.</p>
						</div>
						<img src={RegisterSVG} className="image" alt="register-svg" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Auth;
