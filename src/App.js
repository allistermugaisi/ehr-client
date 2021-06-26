import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Landing } from './components';
import { LoadingSpinner } from './utils/LoadingSpinner';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#069c54',
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
					</Suspense>
					{/* <Route path="/signin" component={Login} />
						<Route path="/payment" component={Payment} /> */}
				</Switch>
			</ThemeProvider>
		</div>
	);
}

export default App;
