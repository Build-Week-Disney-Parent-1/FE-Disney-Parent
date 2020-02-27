import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

function SignInForm({ errors, touched }) {
	return (
		<Form>
			<h2>Sign In</h2>
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
					<option value="parants">Parent</option>
					<option value="caregivers">Caregiver</option>
				</Field>
				{touched.role && errors.role && <p>{errors.role}</p>}
			</label>
			<button type="submit">Sign In</button>
		</Form>
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
})(SignInForm);

export default FormikLoginForm;
