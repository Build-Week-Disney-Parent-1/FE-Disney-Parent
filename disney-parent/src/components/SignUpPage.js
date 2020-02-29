import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import BgImage from '../assets/disney.png';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main`
	width: 100%;

	text-align: center;
	display: flex;
	flex-direction: column-reverse;
	@media (min-width: 700px) {
		flex-direction: row;
		height: 100vh;
	}
`;

const Wrapper = styled.section`
	background: #eeeeee;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;

	@media (min-width: 700px) {
		background-image: url(${BgImage});
		background-size: 232px;
		background-repeat: no-repeat;
		background-position: center bottom;
		background-size: 282px;
		width: 40%;
	}
	@media (min-width: 1000px) {
		background-size: 380px;
	}

	@media (min-width: 1400px) {
		background-size: 462px;
	}
`;

const H2 = styled.h2`
	font-size: 2.8rem !important;
	font-weight: bold;
	font-size: 4.8rem;
	line-height: 56px;
	color: #2f2f2f;
	margin: 0 auto 1.5rem;
	@media (min-width: 700px) {
		font-size: 4.8rem;
	}
`;

const P = styled.p`
	font-size: 2rem;
	width: 95%;
	line-height: 28px;
	@media (min-width: 700px) {
		font-size: 2.4rem;
		width: 70%;
	}
	@media (min-width: 1000px) {
		width: 50%;
	}
`;

const StyledLink = styled(NavLink)`
	font-family: Gentium Basic;
	font-style: normal;
	background: #009ddc;
	border: 1px solid #2f2f2f;
	box-sizing: border-box;
	border-radius: 5px;
	margin-bottom: 2rem;
	font-size: 1.4rem;
	line-height: 16px;
	padding: 1.2rem 1.3rem;
	width: 15rem;
	font-weight: bold;
	text-decoration: none;
	color: inherit;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	transition: transform 0.4s ease-in-out;

	&:hover {
		cursor: pointer;
		transform: scale(1.05);
	}

	&:focus {
		outline: none;
	}
`;

const Div = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const FormWrapper = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	width: 100%;
	@media (min-width: 700px) {
		width: 60%;
	}
`;

const Label = styled.label`
	font-family: Gentium Basic;
	font-style: normal;
	font-weight: bold;
	font-size: 1.4rem;
	line-height: 16px;
	color: #2f2f2f;
	padding-bottom: 1.5rem;
	text-align: left;
`;

const Input = styled(Field)`
	background: #ffffff;
	border: 1px solid #2f2f2f;
	border-radius: 5px;
	width: 20rem;
	padding: 1rem;
	margin-top: 0.8rem;
	color: #918383;
	&::-webkit-input-placeholder {
		font-family: Gentium Basic;
		font-style: normal;
		font-weight: bold;
		font-size: 12px;
		line-height: 14px;
	}
	&:-moz-placeholder {
		font-family: Gentium Basic;
		font-style: normal;
		font-weight: bold;
		font-size: 12px;
		line-height: 14px;
	}
	&::placeholder {
		font-family: Gentium Basic;
		font-style: normal;
		font-weight: bold;
		font-size: 12px;
		line-height: 14px;
	}
	@media (min-width: 700px) {
		width: 37rem;
	}
`;

const Select = styled(Field)`
	width: 20rem;
	background: #ffffff;
	border: 1px solid #2f2f2f;
	border-radius: 5px;
	font-family: Gentium Basic;
	margin-top: 0.8rem;
	font-size: 1.2rem;
	padding: 1rem;
	font-weight: bold;
	color: #918383;
	-webkit-appearance: none;
	@media (min-width: 700px) {
		width: 37rem;
	}
`;

const SubmitButton = styled.button`
	font-family: Gentium Basic;
	font-style: normal;
	background: #eeeeee;
	border: 1px solid #2f2f2f;
	box-sizing: border-box;
	border-radius: 5px;
	width: 14.2rem;
	padding: 1rem;
	margin-top: 6rem;
	transition: all 0.4s ease-in-out;
	&:hover {
		cursor: pointer;
		transform: scale(1.05);
	}

	&:focus {
		outline: none;
	}
`;

function SignUpPage({ errors, touched, status }) {
	const [user, setUser] = useState([]);
	useEffect(() => {
		status && setUser([...user, status]);
	}, [status]);

	return (
		<Main>
			<Div>
				<H2>Create an Account</H2>
				<FormWrapper>
					<Label>
						First and Last Name
						<br />
						<Input type="text" name="username" placeholder="Sally Seashell" />
						{touched.username && errors.username && <p>{errors.username}</p>}
					</Label>
					<Label>
						Email
						<br />
						<Input type="email" name="email" placeholder="example@example.com" />
						{touched.email && errors.email && <p>{errors.email}</p>}
					</Label>
					<Label>
						Password
						<br />
						<Input type="password" name="password" placeholder="********" />
						{touched.password && errors.password && <p>{errors.password}</p>}
					</Label>
					<Label>
						Parent or Volunteer
						<br />
						<Select component="select" name="role">
							<option>Select One</option>
							<option value="parent">Parent</option>
							<option value="volunteer">Volunteer</option>
						</Select>
						{touched.role && errors.role && <p>{errors.role}</p>}
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
			.required('Password of at least 6 characters is required.'),
		role: Yup.string()
			.ensure()
			.required('Role selection is required')
	}),

	handleSubmit: (values, { resetForm, setStatus, setSubmitting, setErrors }) => {
		console.log('values', values);
		axios
			.post('https://reqres.in/api/users	', values)
			.then(res => {
				console.log('res.data', res.data); // Data was created successfully and logs to console
				resetForm();
				setStatus(res.data);
				setSubmitting(false);
			})
			.catch(err => {
				console.log(err); // There was an error creating the data and logs to console
				setErrors(err);
				setSubmitting(false);
			});
	}
})(SignUpPage);

export default FormikLoginForm;