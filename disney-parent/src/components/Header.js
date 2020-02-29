import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Header() {
	const HeaderElement = styled.header`
		font-family: Gentium Basic;
		font-style: italic;
		font-weight: bold;
		width: 100%;
		height: 5%;
		@media (min-width: 700px) {
			position: fixed;
		}
	`;
	const Nav = styled.nav`
		width: 100%;
		background: #fff;
		text-align: center;
		@media (min-width: 700px) {
			text-align: left;
			box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
		}
	`;
	const StyledLink = styled(Link)`
		display: inline-block;
		font-family: Gentium Basic;
		font-style: italic;
		font-weight: bold;
		font-size: 1.6rem;
		padding: 1.5rem;
		text-decoration: none;
		color: #000000;
		@media (min-width: 700px) {
			font-size: 3.6rem;
			padding: 1.5rem 2.5rem;
		}
	`;
	return (
		<HeaderElement>
			<Nav>
				<StyledLink to="/">Disney Parent</StyledLink>
			</Nav>
		</HeaderElement>
	);
}

export default Header;
