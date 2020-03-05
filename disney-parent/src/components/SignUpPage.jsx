import React, { useEffect } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Header from './Header';
import {
	Main,
	Wrapper,
	H2,
	Pgh,
	ActionButton,
	FormWrapper,
	FormElement,
	Label,
	Input,
	Select,
	SubmitButton,
	ErrorMessage
} from './styles';

function SignUpPage({ errors, touched, status, user, setUser }) {
	useEffect(() => {
		status && setUser([...user, status]);
	}, [status]);
	return (
		<Main>
			<Header />
			<FormWrapper>
				<H2>Create an Account</H2>
				<FormElement>
					<Label>
						First and Last Name
						<br />
						<Input type="text" name="username" placeholder="Sally Seashell" />
						{touched.username && errors.username && (
							<ErrorMessage>{errors.username}</ErrorMessage>
						)}
					</Label>
					<Label>
						Email
						<br />
						<Input type="email" name="email" placeholder="example@example.com" />
						{touched.email && errors.email && (
							<ErrorMessage>{errors.email}</ErrorMessage>
						)}
					</Label>
					<Label>
						Password
						<br />
						<Input type="password" name="password" placeholder="********" />
						{touched.password && errors.password && (
							<ErrorMessage>{errors.password}</ErrorMessage>
						)}
					</Label>
					<Label>
						Parent or Volunteer
						<br />
						<Select component="select" name="role">
							<option>Select One</option>
							<option value="parent">Parent</option>
							<option value="volunteer">Volunteer</option>
						</Select>
						{touched.role && errors.role && (
							<ErrorMessage>{errors.role}</ErrorMessage>
						)}
					</Label>
					<SubmitButton type="submit">Let's Go!</SubmitButton>
				</FormElement>
			</FormWrapper>
			<Wrapper>
				<H2>Welcome Back!</H2>
				<Pgh>Use your email to sign back in and check on your parent request!</Pgh>
				<ActionButton to="/login">Sign In</ActionButton>
			</Wrapper>
		</Main>
	);
}

const FormikLoginForm = withFormik({
	mapPropsToValues({ username, email, password, role }) {
		return {
			username: username || '',
			email: email || '',
			password: password || '',
			role: role || '',
		};
	},

	//======VALIDATION SCHEMA==========
	validationSchema: Yup.object().shape({
		username: Yup.string().required('Full name is required.'),
		email: Yup.string()
			.email()
			.required('Email address is required.'),
		password: Yup.string()
			.min(6)
			.required('Password must be at least 6 characters long.'),
		role: Yup.string()
			.ensure()
			.required('Role selection is required.')
	}),

	handleSubmit: (values, { resetForm, setStatus, setSubmitting, setErrors, props}) => {
		console.log('values', values);
		// history prop from react router
		const { history, setUserLogin } = props

		// Spread in the user data from the form and also delete the password field off the object
		const user = { ...values }
		delete user.password

		localStorage.setItem("user", JSON.stringify(user))
		history.push('/loggedin')
		setUserLogin(localStorage.getItem("user"))
		// axios
		// 	.post('https://disney-parent-api.herokuapp.com/api/auth/register', values)
		// 	.then(res => {
		// 		console.log('res.data', res.data);
		// 		resetForm();
		// 		setStatus(res.data);
		// 		setSubmitting(false);
		// 		// add a property to the user object upon successful request
		// 		user.isLoggedIn = true
		// 		// set local storage for a dummy user, this is the state from the form
		// 		localStorage.setItem("user", JSON.stringify(user))
		// 		// push the user to the main app view
		// 		history.push('/loggedin')
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 		setErrors(err);
		// 		setSubmitting(false);
		// 	});
	}
})(SignUpPage);

export default FormikLoginForm;
