import React, { useState } from 'react';
import './App.css';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import WelcomePage from './components/WelcomePage';
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
						localStorage.getItem("user") !== null ? (
							<Redirect to="/loggedin" />
						) : (
							<Redirect to="/login" />
						)
					}
				/>
				<Route 
					exact
					path="/login"
					render={() => <SignInPage userLogin={userLogin} setUserLogin={setUserLogin} />}
				/>
				<Route
					exact
					path="/signup"
					render={(routeProps) => <SignUpPage user={user} setUser={setUser} {...routeProps}/>}
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
