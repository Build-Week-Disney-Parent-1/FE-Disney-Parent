import React, { useEffect, useState } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Header from '../Header/Header';
import {
	Main,
	Wrapper,
	H2,
	P,
	StyledLink,
	Div,
	FormWrapper,
	Label,
	Input,
	Select,
	SubmitButton,
	ErrorMessage
} from './styles'


function SignUpPage({ errors, touched, status, user, setUser }) {
	useEffect(() => {
		status && setUser([...user, status]);
	}, [status]);

	return (
		<Main>
			<Header />
			<Div>
				<H2>Create an Account</H2>
				<FormWrapper>
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
				</FormWrapper>
			</Div>
			<Wrapper>
				<H2>Welcome Back!</H2>
				<P>Use your email to sign back in and check on your parent request!</P>
				<StyledLink to="/">Sign In</StyledLink>
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
			role: role || ''
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

	handleSubmit: (values, { resetForm, setStatus, setSubmitting, setErrors }) => {
		console.log('values', values);
		axios
			.post('https://disney-parent-api.herokuapp.com/api/auth/register', values)
			.then(res => {
				console.log('res.data', res.data);
				resetForm();
				setStatus(res.data);
				setSubmitting(false);
			})
			.catch(err => {
				console.log(err);
				setErrors(err);
				setSubmitting(false);
			});
	}
})(SignUpPage);

export default FormikLoginForm;
