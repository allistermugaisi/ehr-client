import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Badge } from '@material-ui/core';
import { useDetectOutsideClick } from '../../utils/useDetectOutsideClick';
import Profile from '../../assets/images/profile.jpg';
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
							<span className="links_name">Home</span>
						</Link>
						<span className="tooltip">Home</span>
					</li>
					<li>
						<Link to="#">
							<i className="bx bx-calendar"></i>
							<span className="links_name">Schedule</span>
						</Link>
						<span className="tooltip">Schedule</span>
					</li>
					<li>
						<Link to="#">
							<i className="bx bx-calendar-week"></i>
							<span className="links_name">Tasks</span>
						</Link>
						<span className="tooltip">Tasks</span>
					</li>
					<li>
						<Link to="#">
							<i className="bx bx-line-chart"></i>
							<span className="links_name">Charts</span>
						</Link>
						<span className="tooltip">Charts</span>
					</li>
					<li>
						<Link to="#">
							<i className="bx bx-chat"></i>
							<span className="links_name">Messages</span>
						</Link>
						<span className="tooltip">Messages</span>
					</li>
					<li>
						<Link to="#">
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
			<div className="home_content">
				<nav>
					<div className={searchToggled ? 'navbar showInput' : 'navbar'}>
						<div className="nav-links">
							<ul className="links">
								<li>
									<Link to="#">Dashboard</Link>
									<i className="bx bxs-chevron-down js-arrow arrow"></i>
									<ul className="js-sub-menu sub-menu">
										<li>
											<Link to="#">Patients</Link>
										</li>
										<li>
											<Link to="#">Calendar</Link>
										</li>
										<li>
											<Link to="#">Documents</Link>
										</li>
										<li>
											<Link to="#">Patient Communications</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link to="#">Clinical</Link>
									<i className="bx bxs-chevron-down htmlcss-arrow arrow"></i>
									<ul className="htmlCss-sub-menu sub-menu">
										<li>
											<Link to="#">Clinical tasks</Link>
										</li>
										<li>
											<Link to="#">eRx Requests</Link>
										</li>
										<li>
											<Link to="#">Labs/Studies</Link>
										</li>
										<li>
											<Link to="#">Open Notes</Link>
										</li>
										<li className="more">
											<span>
												<Link to="#">More</Link>
												<i className="bx bxs-chevron-right arrow more-arrow"></i>
											</span>
											<ul className="more-sub-menu sub-menu">
												<li>
													<Link to="#">Referrals</Link>
												</li>
												<li>
													<Link to="#">Superbills</Link>
												</li>
												<li>
													<Link to="#">Clinical Reports</Link>
												</li>
												<li>
													<Link to="#">
														Medicaid Promoting Interoperability
													</Link>
												</li>
												<li>
													<Link to="#">
														Medicare Promoting Interoperability (MIPS)
													</Link>
												</li>
												<li>
													<Link to="#">Quality Measures</Link>
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li>
									<Link to="#">Billing</Link>
									<i className="bx bxs-chevron-down js-arrow arrow"></i>
									<ul className="js-sub-menu sub-menu">
										<li>
											<Link to="#">Charges</Link>
										</li>
										<li>
											<Link to="#">Insurance Collections</Link>
										</li>
										<li>
											<Link to="#">Patient collections</Link>
										</li>
										<li>
											<Link to="#">Analytics</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link to="#">Engage</Link>
									<i className="bx bxs-chevron-down js-arrow arrow"></i>
									<ul className="js-sub-menu sub-menu">
										<li>
											<Link to="#">Performance Dashboard</Link>
										</li>
										<li>
											<Link to="#">Surveys & Reviews</Link>
										</li>
										<li>
											<Link to="#">Online Presence</Link>
										</li>
										<li>
											<Link to="#">Patient Broadcast</Link>
										</li>
										<li>
											<Link to="#">Patient Intake</Link>
										</li>
									</ul>
								</li>
							</ul>
						</div>
						<div className="profile-box">
							<div className="search-box">
								<i
									onClick={handleSearchToggle}
									className={searchToggled ? 'bx bx-x' : 'bx bx-search'}
								></i>
								<div className="input-box">
									<input type="text" placeholder="Search..." />
								</div>
							</div>
							<div className="nav-notification">
								<IconButton>
									<Badge
										color="secondary"
										badgeContent="99+"
										variant="standard"
									>
										<i className="bx bx-bell"></i>
									</Badge>
								</IconButton>
							</div>
							<div className="menu-container">
								<button onClick={onClick} className="menu-trigger">
									<span>Admin</span>
									<img src={Profile} alt="User avatar" />
								</button>
								<div
									ref={dropdownRef}
									className={`menu ${isActive ? 'active' : 'inactive'}`}
								>
									<ul>
										<li>
											<Link to="#">Profile</Link>
										</li>
										<li>
											<Link to="#">Settings</Link>
										</li>
										<li>
											<Link to="#">Provider Profiles</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</nav>
				<div className="text">
					Welcome to Afya EHR!
					<br /> <Link to="/auth/signin">Signup</Link>
				</div>
			</div>
		</>
	);
};

export default Landing;
