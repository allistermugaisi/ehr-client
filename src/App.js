import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Landing, Auth } from './components';
import { LoadingSpinner } from './utils/LoadingSpinner';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

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
						<Route exact path="/" component={Landing} />
						<Route path="/:id" component={Landing} />
						<Route exact path="/auth/signin" component={Auth} />
					</Suspense>
					{/* <Route path="/payment" component={Payment} /> */}
				</Switch>
			</ThemeProvider>
		</div>
	);
}

export default App;
