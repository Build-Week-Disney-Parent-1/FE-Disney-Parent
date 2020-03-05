import React, { useEffect } from 'react';
import { withFormik } from 'formik';
import {
	RequestFormWrapper,
	RequestFormElement,
	Label,
	Input,
	Select,
	PostButton
} from './styles';

function RequestForm({ status, request, setRequest }) {
	useEffect(() => {
		status && setRequest([...request, status]);
	}, [status]);

	return (
		<RequestFormWrapper>
			<RequestFormElement>
				<Label style={{ width: '65%' }}>
					Request
					<br />
					<Input
						type="text"
						name="request"
						placeholder="Anyone around to swap with me?"
						style={{ width: '100%' }}
					/>
				</Label>
				<Label style={{ width: '15%' }}>
					Time
					<br />
					<Select component="select" name="time" style={{ width: '100%' }}>
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
					<Select component="select" name="children" style={{ width: '100%' }}>
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
					<Select component="select" name="ride" style={{ width: '100%' }}>
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
					<Select component="select" name="location" style={{ width: '100%' }}>
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
						style={{ width: '100%' }}
					/>
				</Label>
				<PostButton type="submit">Post</PostButton>
			</RequestFormElement>
		</RequestFormWrapper>
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

		setStatus(values);
	}
})(RequestForm);

export default FormikLoginForm;
