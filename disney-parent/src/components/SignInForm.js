import React from 'react';
import { withFormik, Form, Field } from 'formik';

function SignInForm() {
	return (
		<Form>
			<h2>Sign In</h2>
			<label>
				<Field type="email" name="email" placeholder="Email" />
			</label>
			<label>
				<Field type="password" name="password" placeholder="Password" />
			</label>
			<Field component="select" name="role">
				<option>Select your Role</option>
				<option value="parants">Parent</option>
				<option value="caregivers">Caregiver</option>
			</Field>
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

	handleSubmit(values) {
		console.log(values);
	}
})(SignInForm);

export default FormikLoginForm;
