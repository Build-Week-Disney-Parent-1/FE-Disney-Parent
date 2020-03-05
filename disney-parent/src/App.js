import React, { useState } from 'react';
import './App.css';
import SignInPage from './components/SignInPage/SignInPage';
import SignUpPage from './components/SignUpPage/SignUpPage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import { Route, Redirect } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';

function App() {
	//SignInPage and SignUpPage state

	const [userLogin, setUserLogin] = useState([]);
	const [user, setUser] = useState([]);
	return (
		<div className="App">
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
				<Route
					path="/:id"
					render={() => <SignUpPage user={user} setUser={setUser} />}
				/>
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
