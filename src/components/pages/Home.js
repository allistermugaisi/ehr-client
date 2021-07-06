import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<div className="text">
				Welcome to Afya EHR homepage!
				<br /> <Link to="/auth/signin">Signup</Link>
			</div>
		</div>
	);
};

export default Home;
