import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../../assets/images/profile.jpg';

const Sidebar = ({ toggled, handleDrawerToggle }) => {
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
						<Link to="/">
							<i className="bx bx-grid-alt"></i>
							<span className="links_name">Home</span>
						</Link>
						<span className="tooltip">Home</span>
					</li>
					<li>
						<Link to="/schedule">
							<i className="bx bx-calendar"></i>
							<span className="links_name">Schedule</span>
						</Link>
						<span className="tooltip">Schedule</span>
					</li>
					<li>
						<Link to="/tasks">
							<i className="bx bx-calendar-week"></i>
							<span className="links_name">Tasks</span>
						</Link>
						<span className="tooltip">Tasks</span>
					</li>
					<li>
						<Link to="/charts">
							<i className="bx bx-line-chart"></i>
							<span className="links_name">Charts</span>
						</Link>
						<span className="tooltip">Charts</span>
					</li>
					<li>
						<Link to="/messages">
							<i className="bx bx-chat"></i>
							<span className="links_name">Messages</span>
						</Link>
						<span className="tooltip">Messages</span>
					</li>
					<li>
						<Link to="/reports">
							{/* <i className="bx bx-cog"></i> */}
							<i className="bx bx-pie-chart-alt-2"></i>
							<span className="links_name">Reports</span>
						</Link>
						<span className="tooltip">Reports</span>
					</li>
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
		</>
	);
};

export default Sidebar;
