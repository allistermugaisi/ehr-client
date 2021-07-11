import { lazy } from 'react';

// Perform code-Splitting to load components on demand

// Sidebar components
export const Home = lazy(() => import('./Home'));
export const Schedule = lazy(() => import('./Schedule'));
export const Tasks = lazy(() => import('./Tasks'));
export const Charts = lazy(() => import('./Charts'));
export const Messages = lazy(() => import('./Messages'));
export const Reports = lazy(() => import('./Reports'));

// Platform components
export const Patients = lazy(() => import('./Patients'));
export const Calendar = lazy(() => import('./Calendar'));
export const Documents = lazy(() => import('./Documents'));
export const PatientCommunications = lazy(() =>
	import('./PatientCommunications')
);

// Clinical
export const ClinicalTasks = lazy(() => import('./ClinicalTasks'));
export const ERxRequests = lazy(() => import('./ERxRequests'));
export const Labs = lazy(() => import('./Labs'));
export const Notes = lazy(() => import('./Notes'));

// Clinical & More
export const Referrals = lazy(() => import('./Referrals'));
export const SuperBills = lazy(() => import('./SuperBills'));
export const ClinicalReports = lazy(() => import('./ClinicalReports'));
export const MedicaidInteroperability = lazy(() =>
	import('./MedicaidInteroperability')
);
export const MedicareInteroperability = lazy(() =>
	import('./MedicareInteroperability')
);
export const QualityMeasure = lazy(() => import('./QualityMeasure'));

// Billing components
export const Charges = lazy(() => import('./Charges'));
export const InsuranceCollections = lazy(() =>
	import('./InsuranceCollections')
);
export const PatientCollections = lazy(() => import('./PatientCollections'));
export const Analytics = lazy(() => import('./Analytics'));

// Engage components
export const PerformanceDashboard = lazy(() =>
	import('./PerformanceDashboard')
);
export const Surveys = lazy(() => import('./Surveys'));
export const OnlinePresence = lazy(() => import('./OnlinePresence'));
export const PatientBroadcast = lazy(() => import('./PatientBroadcast'));
export const PatientIntake = lazy(() => import('./PatientIntake'));
