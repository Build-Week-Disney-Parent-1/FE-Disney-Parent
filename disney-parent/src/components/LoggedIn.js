import React, { useEffect } from 'react';
import Header from './Header';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.main`
	width: 100%;
	font-size: 1.5rem;
`;

const Content = styled.section`
	display: flex;
	justify-content: flex-end;
	color: #2f2f2f;
`;
const P = styled.p`
	padding: 2rem;
	margin-top: 5%;
`;

function LoggedIn(props) {
	let welcome = props.user ? props.user.name : null;
	// const [data, setData] = useState([]); <= to set data from user API
	useEffect(() => {
		axios
			.get('https://disney-parent-api.herokuapp.com/api/users')
			.then(response => {
				console.log(response.data);
			})
			.catch(err => console.log(err));
	}, [props.userLogin]);
	return (
		<Wrapper>
			<Header />
			<Content>
				<P>{welcome}</P>
				<P>Logout</P>
			</Content>
		</Wrapper>
	);
}

export default LoggedIn;
