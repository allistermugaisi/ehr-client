import React from 'react';
// import { Link } from 'react-router-dom';
import './css/Home.css';

const Home = () => {
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
						<div className="home_appointments">Appointments</div>
					</div>
					<div className="home_card_info">
						<h4>Next Patient Details</h4>
						<div className="home_patient_next">Next Patient Details</div>
					</div>
					<div className="home_card_info">
						<h4>Appointment Requests</h4>
						<div className="home_request_appointments">
							Appointment Requests
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
