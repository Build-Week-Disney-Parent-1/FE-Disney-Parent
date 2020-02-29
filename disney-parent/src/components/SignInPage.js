import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import BgImage from '../assets/disney.png';
import { NavLink } from 'react-router-dom';

const Main = styled.main`
	width: 100%;
	text-align: center;
	display: flex;
	flex-direction: column;

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

const H2 = styled.h2`
	font-size: 2.8rem !important;
	font-weight: bold;
	font-size: 48px;
	line-height: 56px;
	color: #2f2f2f;
	text-align: center;
	margin: 0 auto;
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

function SignInPage({ errors, touched, status }) {
	const [userLogin, setUserLogin] = useState([]);
	useEffect(() => {
		status && setUserLogin([...userLogin, status]);
	}, [status]);

	return (
		<Main>
			<Wrapper>
				<H2>Join the Magic!</H2>
				<P>
					Register using your personal information to connect with Disney Parents
					like you!
				</P>
				<StyledLink to="/signup">Join Now</StyledLink>
			</Wrapper>
			<Div>
				<H2>Sign In</H2>
				<FormWrapper>
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
							<option>Select your Role</option>
							<option value="parant">Parent</option>
							<option value="volunteer">Volunteer</option>
						</Select>
						{touched.role && errors.role && <p>{errors.role}</p>}
					</Label>
					<SubmitButton type="submit">Let's Go! </SubmitButton>
				</FormWrapper>
			</Div>
		</Main>
	);
}

const FormikLoginForm = withFormik({
	mapPropsToValues({ email, password, role }) {
		return {
			email: email || '',
			password: password || '',
			role: role || ''
		};
	},

	//======VALIDATION SCHEMA==========

	validationSchema: Yup.object().shape({
		email: Yup.string()
			.email()
			.required('Please enter your email.'),
		password: Yup.string()
			.min(6)
			.required('Please enter your password.'),
		role: Yup.string()
			.ensure()
			.required('Please select your role.')
	}),

	handleSubmit: (values, { resetForm, setStatus, setSubmitting, setErrors }) => {
		console.log('values', values);
		axios
			.post('https://reqres.in/api/users', values)
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
})(SignInPage);

export default FormikLoginForm;
