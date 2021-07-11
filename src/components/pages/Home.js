import React from 'react';
// import { Link } from 'react-router-dom';
import { Tooltip, Zoom, IconButton, Button } from '@material-ui/core';
import { ChatBubbleOutline, Call, FolderOpen } from '@material-ui/icons';
import Accept from '../../assets/images/check.svg';
import Decline from '../../assets/images/x-square.svg';
import { makeStyles } from '@material-ui/core/styles';
import './css/Home.css';

const useStyles = makeStyles((theme) => ({
	customTooltip: {
		backgroundColor: '#fff',
		color: '#00ab55',
		width: '100px',
		background: '#fff',
		lineHeight: '30px',
		textAlign: 'center',
		fontSize: '1rem',
		transition: 'all 0.5s ease',
		boxShadow:
			'0px 0px 0px 0.5px rgba(50, 50, 93, 0.1), 0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07)',
	},
	customDTooltip: {
		backgroundColor: '#fff',
		color: '#ff0000',
		width: '100px',
		background: '#fff',
		lineHeight: '30px',
		textAlign: 'center',
		fontSize: '1rem',
		transition: 'all 0.5s ease',
		boxShadow:
			'0px 0px 0px 0.5px rgba(50, 50, 93, 0.1), 0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07)',
	},
	customArrow: {
		color: '#fff',
	},
}));

const Home = () => {
	const classes = useStyles();
	return (
		<div>
			<div className="home_container">
				<div className="home_cards">
					<div className="home-card-detail">
						<i className="fas fa-users"></i>
						<div className="home-card-inner">
							<span>Patients</span>
							<p>666</p>
						</div>
					</div>
					<div className="home-card-detail">
						<i className="fas fa-dollar-sign"></i>
						<div className="home-card-inner">
							<span>Income</span>
							<p>$2,111</p>
						</div>
					</div>
					<div className="home-card-detail">
						<i className="bx bx-book-alt"></i>
						<div className="home-card-inner">
							<span>Appointments</span>
							<p>412</p>
						</div>
					</div>
					<div className="home-card-detail">
						<i className="bx bx-heart"></i>
						<div className="home-card-inner">
							<span>Treatments</span>
							<p>105</p>
						</div>
					</div>
				</div>
				<div className="home_info">
					<div className="home_card_info">
						<h4>Today Appointment</h4>
						<div className="home_appointments">
							<div className="appointment_description active">
								<div className="patient_img">
									<img
										src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
										alt="User avatar"
									/>
								</div>
								<div className="patient_info">
									<div>
										<h3>Beth McCarthy</h3>
										<span>Medical Checkup</span>
									</div>
									<div className="appointment_time">
										<p>On Going</p>
									</div>
								</div>
							</div>
							<div className="appointment_description">
								<div className="patient_img">
									<img
										src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
										alt="User avatar"
									/>
								</div>
								<div className="patient_info">
									<div>
										<h3>Evan Henry</h3>
										<span>Sleep deficit</span>
									</div>
									<div className="appointment_time">
										<span>
											12:00<small>pm</small>
										</span>
									</div>
								</div>
							</div>
							<div className="appointment_description">
								<div className="patient_img">
									<img
										src="https://images.unsplash.com/photo-1549351512-c5e12b11e283?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
										alt="User avatar"
									/>
								</div>
								<div className="patient_info">
									<div>
										<h3>Bessie Alexander</h3>
										<span>Decreased cardiac output</span>
									</div>
									<div className="appointment_time">
										<span>
											14:30<small>pm</small>
										</span>
									</div>
								</div>
							</div>
							<div className="appointment_description">
								<div className="patient_img">
									<img
										src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
										alt="User avatar"
									/>
								</div>
								<div className="patient_info">
									<div>
										<h3>Dwilight Murphy</h3>
										<span>Hypothermia</span>
									</div>
									<div className="appointment_time">
										<span>
											15:45<small>pm</small>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="home_card_info">
						<h4>Next Patient Details</h4>
						<div className="home_patient_next">
							<div className="next_patient_info">
								<div className="patient_img">
									<img
										src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
										alt="User avatar"
									/>
								</div>
								<div className="patient_info">
									<div className="appointment_info">
										<div>
											<h3>Evan Henry</h3>
											<span>137 Roosevelt Avenue Pawtucket</span>
										</div>
										<span>RI 02860</span>
									</div>
								</div>
							</div>
							<div className="patient_details">
								<div className="patient_card">
									<h3>D.O.B</h3>
									<p>29 February 2021</p>
								</div>
								<div className="patient_card">
									<h3>Sex</h3>
									<p>Female</p>
								</div>
								<div className="patient_card">
									<h3>Weight</h3>
									<p>56kg</p>
								</div>
								<div className="patient_card">
									<h3>Height</h3>
									<p>172cm</p>
								</div>
								<div className="patient_card">
									<h3>Last Appointment</h3>
									<p>02 June 2021</p>
								</div>
								<div className="patient_card">
									<h3>Register Date</h3>
									<p>19 Dec 2019</p>
								</div>
							</div>
							<div className="patient_diagnosis">
								<span>Asthma</span>
								<span>Hypertension</span>
								<span>Insomnia</span>
							</div>
							<div className="patient_actions">
								<Button
									variant="contained"
									color="primary"
									startIcon={<Call />}
								>
									(401) 555 -0125
								</Button>
								<Button
									variant="outlined"
									color="primary"
									startIcon={<FolderOpen />}
								>
									Documents
								</Button>
								<Button
									variant="outlined"
									color="primary"
									startIcon={<ChatBubbleOutline />}
								>
									Chat
								</Button>
							</div>
						</div>
					</div>
					<div className="home_card_info">
						<h4>Appointment Requests</h4>
						<div className="home_request_appointments">
							<div className="appointment_description">
								<div className="patient_img">
									<img
										src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
										alt="User avatar"
									/>
								</div>
								<div className="patient_info">
									<div className="appointment_info">
										<h3>Deen Cooper</h3>
										<span>Constipation</span>
										<span>
											29 February - 10:00<small>am</small>
										</span>
									</div>
									<div className="appointment_actions">
										<Tooltip
											classes={{
												tooltip: classes.customTooltip,
												arrow: classes.customArrow,
											}}
											title="Accept"
											TransitionComponent={Zoom}
											placement="bottom"
											arrow
										>
											<IconButton>
												<img src={Accept} alt="accept" />
											</IconButton>
										</Tooltip>
										<Tooltip
											classes={{
												tooltip: classes.customDTooltip,
												arrow: classes.customArrow,
											}}
											title="Decline"
											TransitionComponent={Zoom}
											placement="bottom"
											arrow
										>
											<IconButton>
												<img src={Decline} alt="decline" />
											</IconButton>
										</Tooltip>
									</div>
								</div>
							</div>
							<div className="appointment_description">
								<div className="patient_img">
									<img
										src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
										alt="User avatar"
									/>
								</div>
								<div className="patient_info">
									<div className="appointment_info">
										<h3>Ricardo Russel</h3>
										<span>Fluid vomule deficit</span>
										<span>
											2nd March - 9:00<small>am</small>
										</span>
									</div>
									<div className="appointment_actions">
										<Tooltip
											classes={{
												tooltip: classes.customTooltip,
												arrow: classes.customArrow,
											}}
											title="Accept"
											TransitionComponent={Zoom}
											placement="bottom"
											arrow
										>
											<IconButton>
												<img src={Accept} alt="accept" />
											</IconButton>
										</Tooltip>
										<Tooltip
											classes={{
												tooltip: classes.customDTooltip,
												arrow: classes.customArrow,
											}}
											title="Decline"
											TransitionComponent={Zoom}
											placement="bottom"
											arrow
										>
											<IconButton>
												<img src={Decline} alt="decline" />
											</IconButton>
										</Tooltip>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="home_card_info">
						<h4>Overview Analysis</h4>
						<div className="home_analytics">Overview Analysis</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
