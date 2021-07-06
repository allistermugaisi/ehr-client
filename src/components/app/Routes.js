import React from 'react';
import { Route } from 'react-router-dom';
import {
	// Sidebar components
	Home,
	Schedule,
	Tasks,
	Charts,
	Messages,
	Reports,
	// Platform components
	Dashboard,
	Patients,
	Calendar,
	Documents,
	PatientCommunications,
	// Clinical components
	ClinicalTasks,
	ERxRequests,
	Labs,
	Notes,
	// Clinical & More components
	Referrals,
	SuperBills,
	ClinicalReports,
	MedicaidInteroperability,
	MedicareInteroperability,
	QualityMeasure,
	// Billing components
	Charges,
	InsuranceCollections,
	PatientCollections,
	Analytics,
	// Engage components
	PerformanceDashboard,
	Surveys,
	OnlinePresence,
	PatientBroadcast,
	PatientIntake,
} from '../pages';

const routes = [
	// Sidebar routes
	{
		path: `/`,
		exact: true,
		content: () => <Home />,
	},
	{
		path: `/schedule`,
		exact: false,
		content: () => <Schedule />,
	},
	{
		path: `/tasks`,
		exact: false,
		content: () => <Tasks />,
	},
	{
		path: `/charts`,
		exact: false,
		content: () => <Charts />,
	},
	{
		path: `/messages`,
		exact: false,
		content: () => <Messages />,
	},
	{
		path: `/reports`,
		exact: false,
		content: () => <Reports />,
	},
	// Platform routes
	{
		path: `/dashboard`,
		exact: false,
		content: () => <Dashboard />,
	},
	{
		path: `/patients`,
		exact: false,
		content: () => <Patients />,
	},
	{
		path: `/calendar`,
		exact: false,
		content: () => <Calendar />,
	},
	{
		path: `/documents`,
		exact: false,
		content: () => <Documents />,
	},
	{
		path: `/patient_communications`,
		exact: false,
		content: () => <PatientCommunications />,
	},
	// Clinical routes
	{
		path: `/clinical_tasks`,
		exact: false,
		content: () => <ClinicalTasks />,
	},
	{
		path: `/eRx_requests`,
		exact: false,
		content: () => <ERxRequests />,
	},
	{
		path: `/labs`,
		exact: false,
		content: () => <Labs />,
	},
	{
		path: `/notes`,
		exact: false,
		content: () => <Notes />,
	},
	// Clinical & More routes
	{
		path: `/referrals`,
		exact: false,
		content: () => <Referrals />,
	},
	{
		path: `/superbills`,
		exact: false,
		content: () => <SuperBills />,
	},
	{
		path: `/clinical_reports`,
		exact: false,
		content: () => <ClinicalReports />,
	},
	{
		path: `/medicaid_interoperability`,
		exact: false,
		content: () => <MedicaidInteroperability />,
	},
	{
		path: `/medicare_interoperability`,
		exact: false,
		content: () => <MedicareInteroperability />,
	},
	{
		path: `/quality_measure`,
		exact: false,
		content: () => <QualityMeasure />,
	},
	// Billing routes
	{
		path: `/charges`,
		exact: false,
		content: () => <Charges />,
	},
	{
		path: `/insurance_collections`,
		exact: false,
		content: () => <InsuranceCollections />,
	},
	{
		path: `/patient_collections`,
		exact: false,
		content: () => <PatientCollections />,
	},
	{
		path: `/analytics`,
		exact: false,
		content: () => <Analytics />,
	},
	// Engage routes
	{
		path: `/performance_dashboard`,
		exact: false,
		content: () => <PerformanceDashboard />,
	},
	{
		path: `/surveys`,
		exact: false,
		content: () => <Surveys />,
	},
	{
		path: `/online_presence`,
		exact: false,
		content: () => <OnlinePresence />,
	},
	{
		path: `/patient_broadcast`,
		exact: false,
		content: () => <PatientBroadcast />,
	},
	{
		path: `/patient_intake`,
		exact: false,
		content: () => <PatientIntake />,
	},
];

const Routes = () => {
	return (
		<>
			{routes.map((route, index) => {
				const { path, exact, content } = route;
				return (
					<Route
						key={index}
						path={`${path}`}
						exact={exact}
						component={content}
					/>
				);
			})}
		</>
	);
};

export default Routes;
