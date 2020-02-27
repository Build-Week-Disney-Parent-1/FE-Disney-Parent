import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

function SignUpForm({ errors, touched }) {
	return (
		<Form>
			<h2>Sign Up</h2>
			<label>
				First and Last Name
				<Field type="text" name="username" placeholder="Full name" />
				{touched.username && errors.username && <p>{errors.username}</p>}
			</label>
			<label>
				Email:
				<Field type="email" name="email" placeholder="Email" />
				{touched.email && errors.email && <p>{errors.email}</p>}
			</label>
			<label>
				Password:
				<Field type="password" name="password" placeholder="Password" />
				{touched.password && errors.password && <p>{errors.password}</p>}
			</label>
			<label>
				Role:
				<Field component="select" name="role">
					<option>Select your Role</option>
					<option value="parent">Parent</option>
					<option value="caregiver">Caregiver</option>
				</Field>
				{touched.role && errors.role && <p>{errors.role}</p>}
			</label>

			<button type="submit">Sign Up</button>
		</Form>
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

	handleSubmit(values) {
		console.log(values);
	}
})(SignUpForm);

export default FormikLoginForm;
