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

function SignInPage({ errors, touched, status, setUserLogin, userLogin }) {
	useEffect(() => {
		status && setUserLogin([...userLogin, status]);
	}, [status]);

	return (
		<Main>
			<Header />
			<Wrapper>
				<H2>Join the Magic!</H2>
				<Pgh>
					Register using your personal information to connect with Disney Parents
					like you!
				</Pgh>
				<ActionButton to="/signup">Join Now</ActionButton>
			</Wrapper>
			<FormWrapper>
				<H2>Sign In</H2>
				<FormElement>
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
						* Parent or Volunteer
						<br />
						<Select component="select" name="role">
							<option>Select your Role</option>
							<option value="parent">Parent</option>
							<option value="volunteer">Volunteer</option>
						</Select>
						{touched.role && errors.role && (
							<ErrorMessage>{errors.role}</ErrorMessage>
						)}
					</Label>
					<SubmitButton type="submit">Let's Go! </SubmitButton>
				</FormElement>
			</FormWrapper>
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
			.required('* Please select your role.')
	}),

	handleSubmit: (values, { resetForm, setStatus, setSubmitting, setErrors }) => {
		console.log('values', values);
		axios
			.post('https://disney-parent-api.herokuapp.com/api/auth/login', values)
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
