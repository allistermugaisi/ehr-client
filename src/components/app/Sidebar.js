import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Profile from '../../assets/images/profile.jpg';

const Sidebar = ({ toggled, handleDrawerToggle }) => {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
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
						<NavLink
							to="/schedule"
							activeClassName="active"
							onClick={handleClick}
						>
							<i className="bx bx-calendar"></i>
							<span className="links_name">Schedule</span>
						</NavLink>
						<span className="tooltip">Schedule</span>
					</li>
					<li>
						<NavLink to="/tasks" activeClassName="active" onClick={handleClick}>
							<i className="bx bx-calendar-week"></i>
							<span className="links_name">Tasks</span>
						</NavLink>
						<span className="tooltip">Tasks</span>
					</li>
					<li>
						<NavLink
							to="/charts"
							activeClassName="active"
							onClick={handleClick}
						>
							<i className="bx bx-line-chart"></i>
							<span className="links_name">Charts</span>
						</NavLink>
						<span className="tooltip">Charts</span>
					</li>
					<li>
						<NavLink
							to="/messages"
							activeClassName="active"
							onClick={handleClick}
						>
							<i className="bx bx-chat"></i>
							<span className="links_name">Messages</span>
						</NavLink>
						<span className="tooltip">Messages</span>
					</li>
					<li>
						<NavLink
							to="/reports"
							activeClassName="active"
							onClick={handleClick}
						>
							{/* <i className="bx bx-cog"></i> */}
							<i className="bx bx-pie-chart-alt-2"></i>
							<span className="links_name">Reports</span>
						</NavLink>
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
