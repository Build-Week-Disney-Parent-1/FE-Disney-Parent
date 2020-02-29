import React from 'react';
import './App.css';
// import Header from './components/Header';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import { Route } from 'react-router-dom';
import SwipeableRoutes from 'react-swipeable-routes';

function App() {
	return (
		<div className="App">
			{/* <Header /> */}
			{/* <Route exact path="/" component={SignInPage} />
			<Route path="/:id" component={SignUpPage} /> */}
			<SwipeableRoutes>
				<Route exact path="/" component={SignInPage} />
				<Route path="/:id" component={SignUpPage} />
			</SwipeableRoutes>
		</div>
	);
}

export default App;
