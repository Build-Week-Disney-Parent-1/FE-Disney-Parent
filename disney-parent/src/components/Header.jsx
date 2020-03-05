import React from 'react';
import { HeaderElement, Nav, StyledLink } from './styles';

function Header() {
	return (
		<HeaderElement>
			<Nav>
				<StyledLink to="/">Disney Parent</StyledLink>
			</Nav>
		</HeaderElement>
	);
}

export default Header;
