import React from 'react';
import { Route, useParams } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

function Form() {
	let { id } = useParams();
	return (
		<section>
			{id === 'signup' ? (
				<Route exact path="/form/:id">
					<SignUpForm />
				</Route>
			) : (
				<Route path="/form/:id">
					<SignInForm />
				</Route>
			)}
		</section>
	);
}

export default Form;
