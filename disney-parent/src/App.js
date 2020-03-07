import React, { useState } from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage';
import { Route, Redirect } from 'react-router-dom';
import Auth from './components/Auth'

function App() {
	//SignInPage and SignUpPage state
	const [userLogin, setUserLogin] = useState(localStorage.getItem("user"));

	return (
		<div className="App">
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
			
			{/* Render component ONLY if user is not logged in */}
			{ userLogin === null && 
				<Auth setUserLogin={setUserLogin}/>
			}

			{/* Render ONLY if the user IS logged in */}
			{ userLogin && 
				<Route 
					exact 
					path="/loggedin" 
					render={({ history }) => <WelcomePage userLogin={userLogin} setUserLogin={setUserLogin} history={history}/>}/>
			}
		</div>
	);
}

export default App;
