import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

function Header(props) {
	const Header = styled.header`
		background: #009ddc;
		color: #2f2f2f;
	`;
	const Nav = styled.nav`
		width: 100%;
	`;
	const StyledLink = styled(Link)``;
	const StyledNavLink = styled(NavLink)``;
	console.log('props in header', props);
	return (
		<Header>
			<Nav>
				<StyledLink to="/">Disney Parent</StyledLink>
				<StyledNavLink to="/form/signup">Register</StyledNavLink>
				<StyledNavLink to="/form/signin">Login</StyledNavLink>
			</Nav>
		</Header>
	);
}

export default Header;
