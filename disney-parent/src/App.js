import React, { useState } from 'react';
import './App.css';
// import Header from './components/Header';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import WelcomePage from './components/WelcomePage';
import { Route, Redirect } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';

function App() {
	const [userLogin, setUserLogin] = useState([]);

	return (
		<div className="App">
			{/* <Header /> */}
			{/* <Route exact path="/" component={SignInPage} />
			<Route path="/:id" component={SignUpPage} /> */}
			<SwipeableRoutes>
				<Route
					exact
					path="/"
					render={() =>
						userLogin.length > 0 ? (
							<Redirect to="/loggedin" />
						) : (
							<SignInPage userLogin={userLogin} setUserLogin={setUserLogin} />
						)
					}
				/>
				<Route path="/:id" render={() => <SignUpPage />} />
				<Route
					path="/loggedin"
					exact
					render={() => <WelcomePage userLogin={userLogin} />}
				/>
			</SwipeableRoutes>
		</div>
	);
}

export default App;
