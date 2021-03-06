import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Landing, Auth, EmailVerify } from './components';
import { LoadingSpinner } from './utils/LoadingSpinner';
import PrivateRoute from './middleware/PrivateRoute';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Toaster } from 'react-hot-toast';

const theme = createMuiTheme({
	shape: {
		borderRadius: 10,
	},
	palette: {
		primary: {
			main: '#00ab55',
		},
		secondary: {
			main: '#ff1744',
		},
	},
	typography: {
		fontFamily: "'Poppins', sans-serif",
		textTransform: 'none',
		button: {
			textTransform: 'none',
		},
	},
});

function App() {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<Switch>
					<Suspense fallback={<LoadingSpinner />}>
						<PrivateRoute exact path="/" component={Landing} />
						<PrivateRoute exact path="/:id" component={Landing} />
						<Route path="/auth/signin" component={Auth} />
						<Route path="/auth/verify" component={EmailVerify} />
						<Toaster />
					</Suspense>
					{/* <Route path="/payment" component={Payment} /> */}
				</Switch>
			</ThemeProvider>
		</div>
	);
}

export default App;
