import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import RequestCard from './RequestCard';
import SearchForm from './SearchForm';
import RequestForm from './RequestForm';

const Main = styled.main`
	width: 100%;
	font-size: 1.5rem;
`;

const Requests = styled.section`
	display: flex;
	color: #2f2f2f;
	width: 90%;
	margin: 3rem auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

function WelcomePage() {
	const [request, setRequest] = useState([]);
	const [searchResult, setSearchResult] = useState([]);

	return (
		<Main>
			<SearchForm searchResult={searchResult} setSearchResult={setSearchResult} />
			<RequestForm request={request} setRequest={setRequest} />
			<Requests>
				{request.map(item => {
					return <RequestCard item={item} />;
				})}
			</Requests>
		</Main>
	);
}

export default WelcomePage;
