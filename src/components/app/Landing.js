import React, { useState, useRef } from 'react';
import { Sidebar, Navbar, Routes } from './index';
import { useDetectOutsideClick } from '../../utils/useDetectOutsideClick';
import './Landing.css';

const Landing = () => {
	const dropdownRef = useRef(null);
	const [toggled, setToggled] = useState(false);
	const [searchToggled, setSearchToggled] = useState(false);
	const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

	const onClick = () => setIsActive(!isActive);

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
					dropdownRef={dropdownRef}
					sidebar={toggled}
					searchToggled={searchToggled}
					handleSearchToggle={handleSearchToggle}
					isActive={isActive}
					onClick={onClick}
				/>
				<Routes />
			</div>
		</>
	);
};

export default Landing;
