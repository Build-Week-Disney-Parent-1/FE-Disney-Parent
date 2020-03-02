import React, { useState } from 'react';
import './App.css';
// import Header from './components/Header';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import LoggedIn from './components/LoggedIn';
import { Route, Redirect } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';

function App() {
	const [userLogin, setUserLogin] = useState([]);
	const [user, setUser] = useState([]);

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
				<Route
					path="/:id"
					render={() => <SignUpPage user={user} setUser={setUser} />}
				/>
				<Route
					path="/loggedin"
					exact
					render={() => <LoggedIn userLogin={userLogin} user={user} />}
				/>
			</SwipeableRoutes>
		</div>
	);
}

export default App;
