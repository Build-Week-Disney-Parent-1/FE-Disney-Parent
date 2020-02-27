import React from 'react';
import './App.css';
import Header from './components/Header';
import WelcomePage from './components/WelcomePage';
import Form from './components/Form';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Header />
			<Route exact path="/">
				<WelcomePage />
			</Route>
			<Route path="/form/:id" children={<Form />} />
		</div>
	);
}

export default App;
