import React, { useState } from 'react';
import { Sidebar, Navbar, Routes } from './index';
import './Landing.css';

const Landing = () => {
	const [toggled, setToggled] = useState(false);
	const [searchToggled, setSearchToggled] = useState(false);
	const [open, setOpen] = useState(false);

	const handleClickAway = () => {
		setOpen(false);
	};

	const onClick = () => setOpen(!open);

	const handleDrawerToggle = () => {
		setToggled(!toggled);
	};

	const handleSearchToggle = () => {
		setSearchToggled(!searchToggled);
	};

	return (
		<>
			<Sidebar toggled={toggled} handleDrawerToggle={handleDrawerToggle} />
			<div className="home_content">
				<Navbar
					sidebar={toggled}
					searchToggled={searchToggled}
					handleSearchToggle={handleSearchToggle}
					handleClickAway={handleClickAway}
					open={open}
					onClick={onClick}
				/>
				<Routes />
			</div>
		</>
	);
};

export default Landing;
