import React from 'react';
import './App.css';
import Header from './components/Header';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Header />
			<Route exact path="/" component={SignInPage} />
			<Route path="/:id" component={SignUpPage} />
		</div>
	);
}

export default App;
