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
					render={(routeProps) => <SignInPage userLogin={userLogin} setUserLogin={setUserLogin} {...routeProps}/>}
				/>
				<Route
					exact
					path="/signup"
					render={(routeProps) => <SignUpPage user={user} setUser={setUser} {...routeProps}/>}
				/>
			</SwipeableRoutes>
			<Route
					exact
					path="/loggedin"
					render={() => <WelcomePage userLogin={userLogin} />}
				/>
		</div>
	);
}

export default App;
