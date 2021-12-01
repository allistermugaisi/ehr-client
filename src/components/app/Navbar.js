import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconButton, Badge, ClickAwayListener } from '@material-ui/core';

import { logOut } from '../../store/actions/auth';
import Profile from '../../assets/images/profile.jpg';

const Navbar = ({
	searchToggled,
	handleSearchToggle,
	handleClickAway,
	onClick,
	sidebar,
	open,
}) => {
	const dispatch = useDispatch();
	const signOut = () => {
		dispatch(logOut());
	};
	return (
		<>
			<nav className={sidebar ? 'nav active' : 'nav'}>
				<div className={searchToggled ? 'navbar showInput' : 'navbar'}>
					<div className="nav-links">
						<ul className="links">
							<li>
								<Link to="#">Platform</Link>
								<i className="bx bxs-chevron-down js-arrow arrow"></i>
								<ul className="js-sub-menu sub-menu">
									<li>
										<Link to="/patients">Patients</Link>
									</li>
									<li>
										<Link to="/calendar">Calendar</Link>
									</li>
									<li>
										<Link to="/documents">Documents</Link>
									</li>
									<li>
										<Link to="/patient_communications">
											Patient Communications
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link to="#">Clinical</Link>
								<i className="bx bxs-chevron-down htmlcss-arrow arrow"></i>
								<ul className="htmlCss-sub-menu sub-menu">
									<li>
										<Link to="/clinical_tasks">Clinical tasks</Link>
									</li>
									<li>
										<Link to="eRx_requests">eRx Requests</Link>
									</li>
									<li>
										<Link to="/labs">Labs/Studies</Link>
									</li>
									<li>
										<Link to="/notes">Open Notes</Link>
									</li>
									<li className="more">
										<span>
											<Link to="#">More</Link>
											<i className="bx bxs-chevron-right arrow more-arrow"></i>
										</span>
										<ul className="more-sub-menu sub-menu">
											<li>
												<Link to="/referrals">Referrals</Link>
											</li>
											<li>
												<Link to="/superbills">Superbills</Link>
											</li>
											<li>
												<Link to="/clinical_reports">Clinical Reports</Link>
											</li>
											<li>
												<Link to="/medicaid_interoperability">
													Medicaid Promoting Interoperability
												</Link>
											</li>
											<li>
												<Link to="/medicare_interoperability">
													Medicare Promoting Interoperability (MIPS)
												</Link>
											</li>
											<li>
												<Link to="/quality_measure">Quality Measures</Link>
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
										<Link to="/charges">Charges</Link>
									</li>
									<li>
										<Link to="/insurance_collections">
											Insurance Collections
										</Link>
									</li>
									<li>
										<Link to="/patient_collections">Patient collections</Link>
									</li>
									<li>
										<Link to="/analytics">Analytics</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link to="#">Engage</Link>
								<i className="bx bxs-chevron-down js-arrow arrow"></i>
								<ul className="js-sub-menu sub-menu">
									<li>
										<Link to="/performance_dashboard">
											Performance Dashboard
										</Link>
									</li>
									<li>
										<Link to="/surveys">Surveys & Reviews</Link>
									</li>
									<li>
										<Link to="/online_presence">Online Presence</Link>
									</li>
									<li>
										<Link to="/patient_broadcast">Patient Broadcast</Link>
									</li>
									<li>
										<Link to="/patient_intake">Patient Intake</Link>
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
								<Badge color="secondary" badgeContent="99+" variant="standard">
									<i className="bx bx-bell"></i>
								</Badge>
							</IconButton>
						</div>
						<ClickAwayListener onClickAway={handleClickAway}>
							<div className="menu-container">
								<button onClick={onClick} className="menu-trigger">
									<span>Admin</span>
									<img src={Profile} alt="User avatar" />
								</button>
								<div className={`menu ${open ? 'active' : 'inactive'}`}>
									<ul>
										<li>
											<Link to="#">Profile</Link>
										</li>
										<li>
											<Link to="#">Settings</Link>
										</li>
										<li>
											<Link to="#" onClick={signOut}>
												Logout
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</ClickAwayListener>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
