import React, { useEffect } from 'react';
import { withFormik } from 'formik';

import {
	SearchFormWrapper,
	SearchFormElement,
	Label,
	SerachButton,
	Input,
	Select
} from './styles';

function SearchForm({ status, searchResult, setSearchResult }) {
	useEffect(() => {
		status && setSearchResult([status]);
	}, [status]);

	return (
		<SearchFormWrapper>
			<SearchFormElement>
				<Label style={{ width: '100%' }}>
					Search
					<br />
					<Input
						type="text"
						name="search"
						placeholder="Keyword, Name or Location"
						style={{ width: '100%' }}
					/>
				</Label>
				<Label style={{ width: '65%' }}>
					Meeting Location
					<br />
					<Select component="select" name="location" style={{ width: '100%' }}>
						<option>Select One</option>
						<option value="Tomorrowland">Tomorrowland</option>
					</Select>
				</Label>
				<Label style={{ width: '10%' }}>
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
				<br />
				<SerachButton type="submit">Search</SerachButton>
			</SearchFormElement>
		</SearchFormWrapper>
	);
}

const FormikLoginForm = withFormik({
	mapPropsToValues({ search, time, location }) {
		return {
			search: search || '',
			time: time || '',
			location: location || ''
		};
	},

	handleSubmit: (values, { setStatus }) => {
		setStatus(values);
	}
})(SearchForm);

export default FormikLoginForm;
