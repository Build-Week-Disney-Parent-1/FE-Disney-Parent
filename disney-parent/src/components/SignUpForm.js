import React from 'react';
import { withFormik, Form, Field } from 'formik';

function SignUpForm() {
	return (
		<Form>
			<h2>Sign Up</h2>
			<label>
				<Field type="text" name="username" placeholder="Full name" />
			</label>
			<label>
				<Field type="email" name="email" placeholder="Email" />
			</label>
			<label>
				<Field type="password" name="password" placeholder="Password" />
			</label>
			<Field component="select" name="role">
				<option>Select your Role</option>
				<option value="parent">Parent</option>
				<option value="caregiver">Caregiver</option>
			</Field>
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

	handleSubmit(values) {
		console.log(values);
	}
})(SignUpForm);

export default FormikLoginForm;
