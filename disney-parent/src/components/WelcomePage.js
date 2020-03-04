import React, { useState } from 'react';
import styled from 'styled-components';
import RequestCard from './RequestCard';
import SearchForm from './SearchForm';
import RequestForm from './RequestForm';

const Main = styled.main`
	width: 100%;
	font-size: 1.5 rem;
`;

const Header = styled.header`
	font-style: italic;
	font-weight: bold;
	width: 100%;
	background: #009ddc;
`;

const Nav = styled.nav`
	background: inherit;
	padding: 2rem;
	@media (min-width: 700px) {
		text-align: right;
	}
`;

const NavItem = styled.a`
	color: #2f2f2f;
	text-decoration: none;
	padding: 2rem;
	font-size: 1.8rem;
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
