import React, { useState } from 'react';
import RequestCard from '../RequestCard/RequestCard';
import SearchForm from '../SearchForm/SearchForm';
import RequestForm from '../RequestForm/RequestForm';
import {
	Main,
	Header,
	Nav,
	NavItem,
	Requests
} from './styles'


function WelcomePage() {
	const [request, setRequest] = useState([]);
	const [searchResult, setSearchResult] = useState([]);

	return (
		<div>
			<Header>
				<Nav>
					<NavItem href="#">Disney Parent</NavItem>
					<NavItem href="#">About</NavItem>
					<NavItem href="#">Contact</NavItem>
					<NavItem href="#"> Our Team</NavItem>
					<button>Sign Out</button>
				</Nav>
			</Header>
			<Main>
				<SearchForm searchResult={searchResult} setSearchResult={setSearchResult} />
				<RequestForm request={request} setRequest={setRequest} />
				<Requests>
					{request.map(item => {
						return <RequestCard item={item} />;
					})}
				</Requests>
			</Main>
		</div>
	);
}

export default WelcomePage;
