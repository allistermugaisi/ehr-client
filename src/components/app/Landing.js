import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../assets/images/profile.jpg';
import './Landing.css';

const Landing = () => {
	const [toggled, setToggled] = useState(false);

	const handleDrawerToggle = () => {
		setToggled(!toggled);
	};

	return (
		<>
			<div className={toggled ? 'sidebar active' : 'sidebar'}>
				<div className="logo_content">
					<div className="logo">
						<i className="bx bxl-c-plus-plus"></i>
						<div className="logo_name">AfyaEHR</div>
					</div>
					<i className="bx bx-menu" onClick={handleDrawerToggle} id="btn"></i>
				</div>
				<ul className="nav_list">
					{/* <li>
						<i className="bx bx-search"></i>
						<input type="text" placeholder="Search..." />
						<span className="tooltip">Search</span>
					</li> */}
					<li>
						<Link to="#">
							<i className="bx bx-grid-alt"></i>
							<span className="links_name">Dashboard</span>
						</Link>
						<span className="tooltip">Dashboard</span>
					</li>
					<li>
						<Link to="#">
							<i className="bx bx-user"></i>
							<span className="links_name">Patients</span>
						</Link>
						<span className="tooltip">Patients</span>
					</li>
					<li>
						<Link to="#">
							<i className="bx bx-chat"></i>
							<span className="links_name">Appointments</span>
						</Link>
						<span className="tooltip">Appointments</span>
					</li>
					<li>
						<Link to="#">
							<i className="bx bx-pie-chart-alt-2"></i>
							<span className="links_name">Analytics</span>
						</Link>
						<span className="tooltip">Analytics</span>
					</li>
					<li>
						<Link to="#">
							<i className="bx bx-folder"></i>
							<span className="links_name">Documents</span>
						</Link>
						<span className="tooltip">Documents</span>
					</li>
					{/* <li>
						<Link to="#">
							<i className="bx bx-cog"></i>
							<span className="links_name">Settings</span>
						</Link>
						<span className="tooltip">Settings</span>
					</li> */}
				</ul>
				<div className="profile_content">
					<div className="profile">
						<div className="profile_details">
							<img src={Profile} alt="profile" />
							<div className="name_job">
								<div className="name">Whitney Shahi</div>
								<div className="job">Provider</div>
							</div>
						</div>
						<i className="bx bx-log-out" id="log_out"></i>
					</div>
				</div>
			</div>
			<div className="home_content">
				<div className="text">Welcome to Afya EHR</div>
			</div>
		</>
	);
};

export default Landing;
