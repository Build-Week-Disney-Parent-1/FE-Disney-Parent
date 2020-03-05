import React, { useState, useEffect } from 'react';
import RequestCard from './RequestCard';
import SearchForm from './SearchForm';
import RequestForm from './RequestForm';
// styles
import {
	WelcomePageWrapper,
	WelcomePageNav,
	NavItem,
	SignOutButton,
	RequestCardsWrapper
} from './styles';
// dummy data
import { requests } from '../data/requests'

function WelcomePage() {
	const [request, setRequest] = useState([]);
	const [searchResult, setSearchResult] = useState([]);
	
	useEffect(() => {
		
		// populate state with some dummy data on inital render
		setRequest(requests)
	}, [])

	
	return (
		<WelcomePageWrapper>
			<header>
				<WelcomePageNav>
					<NavItem href="#">Disney Parent</NavItem>
					<NavItem href="#">About</NavItem>
					<NavItem href="#">Contact</NavItem>
					<NavItem href="#"> Our Team</NavItem>
					<SignOutButton>Sign Out</SignOutButton>
				</WelcomePageNav>
			</header>
			<main>
				<SearchForm searchResult={searchResult} setSearchResult={setSearchResult} />
				<RequestForm request={request} setRequest={setRequest} />
				<RequestCardsWrapper>
					{request.map(item => {
						return <RequestCard item={item} />;
					})}
				</RequestCardsWrapper>
			</main>
		</WelcomePageWrapper>
	);
}

export default WelcomePage;
