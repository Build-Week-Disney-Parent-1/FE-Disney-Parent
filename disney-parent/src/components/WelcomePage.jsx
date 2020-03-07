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

function WelcomePage({ history, setUserLogin }) {
	// state to track a array of requests
	const [userRequests, setRequests] = useState([])

	// state for searching / filtering
	const [searchResult, setSearchResult] = useState([]);

	console.log("REQUESTS: ", requests)

	useEffect(() => {
		// set userRequests on initial render
		setRequests(requests)
	},[])
	
	function handleSignout(){

		localStorage.removeItem("user")
		history.push('/')
		setUserLogin(localStorage.getItem("user"))

	}

	return (
		<WelcomePageWrapper>
			<header>
				<WelcomePageNav>
					<NavItem href="#">Disney Parent</NavItem>
					<NavItem href="#">About</NavItem>
					<NavItem href="#">Contact</NavItem>
					<NavItem href="#"> Our Team</NavItem>
					<SignOutButton onClick={() => handleSignout()}>Sign Out</SignOutButton>
				</WelcomePageNav>
			</header>
			<main>
				<SearchForm searchResult={searchResult} setSearchResult={setSearchResult} />
				<RequestForm  userRequests={userRequests} setRequests={setRequests}/>
				<RequestCardsWrapper>
					{userRequests.map(item => {
						return <RequestCard item={item} />;
					})}
				</RequestCardsWrapper>
			</main>
		</WelcomePageWrapper>
	);
}

export default WelcomePage;
