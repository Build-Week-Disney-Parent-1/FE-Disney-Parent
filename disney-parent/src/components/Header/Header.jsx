import React from 'react';
// Import styled components from styles.js file
// This is done to keep the component files cleaned up
import { HeaderElement, Nav, StyledLink } from './styles'

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
