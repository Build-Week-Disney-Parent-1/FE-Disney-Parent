import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { withFormik, Form, Field } from 'formik';

const Content = styled.section`
	display: flex;
	color: #2f2f2f;
	background: #eee;
	width: 90%;
	margin: 3rem auto;
`;

const inputStyles = css`
	width: 100%;
	background: #ffffff;
	border: 1px solid #2f2f2f;
	border-radius: 5px;
	font-family: Gentium Basic;
	margin-top: 0.8rem;
	font-size: 1.2rem;
	padding: 1rem;
	font-weight: bold;
	color: #918383;
`;

const FormWrapper = styled(Form)`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	width: 70%;
	padding: 2rem;
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
	${inputStyles}
`;

const Select = styled(Field)`
	${inputStyles}
	-webkit-appearance: none;
`;

const SubmitButton = styled.button`
	font-family: Gentium Basic;
	font-style: normal;
	background: #fff;
	border: 1px solid #2f2f2f;
	box-sizing: border-box;
	border-radius: 5px;
	width: 20%;
	padding: 1rem;
	margin-bottom: -0.4rem;
	margin-right: 0;
	font-weight: bold;
	transition: all 0.4s ease-in-out;
	&:hover {
		cursor: pointer;
		transform: scale(1.05);
	}

	&:focus {
		outline: none;
	}
`;

function RequestForm({ status, request, setRequest }) {
	useEffect(() => {
		status && setRequest([...request, status]);
	}, [status]);

	return (
		<Content>
			<FormWrapper>
				<Label style={{ width: '65%' }}>
					Request
					<br />
					<Input
						type="text"
						name="request"
						placeholder="Anyone around to swap with me?"
					/>
				</Label>
				<Label style={{ width: '15%' }}>
					Time
					<br />
					<Select component="select" name="time">
						<option>Select One</option>
						<option value="9:00 A.M.">9:00 A.M.</option>
						<option value="9:30 A.M.">9:30 A.M.</option>
						<option value="10:00 A.M.">10:00 A.M.</option>
						<option value="10:30 A.M.">10:30 A.M.</option>
						<option value="11:00 A.M.">11:00 A.M.</option>
						<option value="11:30 A.M.">11:30 A.M.</option>
						<option value="12:00 P.M.">12:00 P.M.</option>
						<option value="12:30 P.M.">12:30 P.M.</option>
						<option value="1:00 P.M.">13:00 P.M.</option>
						<option value="1:30 P.M.">13:30 P.M.</option>
						<option value="2:00 P.M.">14:00 P.M.</option>
						<option value="2:30 P.M.">14:30 P.M.</option>
						<option value="3:00 P.M.">15:00 P.M.</option>
						<option value="3:30 P.M.">15:30 P.M.</option>
						<option value="4:00 P.M.">16:00 P.M.</option>
						<option value="4:30 P.M.">16:30 P.M.</option>
						<option value="5:00 P.M.">17:00 P.M.</option>
						<option value="5:30 P.M.">17:30 P.M.</option>
						<option value="6:00 P.M.">18:00 P.M.</option>
					</Select>
				</Label>
				<Label style={{ width: '15%' }}>
					Children
					<br />
					<Select component="select" name="children">
						<option>Select One</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5"> 5 or more</option>
					</Select>
				</Label>
				<Label style={{ width: '65%' }}>
					Ride
					<br />
					<Select component="select" name="ride">
						<option>Select One</option>
						<option value="Soarin’ around the World">Soarin’ around the World</option>
						<option value="Avatar Flight of Passage">Avatar Flight of Passage</option>
						<option value="Test Track">Test Track</option>
						<option value="Splash Mountain">Splash Mountain</option>
						<option value="Big Thunder Mountain Railroad">
							Big Thunder Mountain Railroad
						</option>
					</Select>
				</Label>
				<Label style={{ width: '30%' }}>
					Meeting Location
					<br />
					<Select component="select" name="location">
						<option>Select One</option>
						<option value="Tomorrowland">Tomorrowland</option>
					</Select>
				</Label>
				<Label style={{ width: '100%' }}>
					Message
					<br />
					<Input
						type="text"
						name="message"
						component="textarea"
						placeholder="Anyone around to swap with me?"
					/>
				</Label>
				<SubmitButton type="submit">Let's Go!</SubmitButton>
			</FormWrapper>
		</Content>
	);
}

const FormikLoginForm = withFormik({
	mapPropsToValues({ request, time, children, ride, location, message }) {
		return {
			request: request || '',
			time: time || '',
			children: children || '',
			ride: ride || '',
			location: location || '',
			message: message || ''
		};
	},

	handleSubmit: (values, { setStatus }) => {
		console.log('values', values);
		setStatus(values);
	}
})(RequestForm);

export default FormikLoginForm;
