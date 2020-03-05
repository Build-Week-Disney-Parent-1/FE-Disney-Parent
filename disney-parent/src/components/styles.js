import styled, { css } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Form, Field } from 'formik';
import BgImage from '../assets/disney.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Header

export const HeaderElement = styled.header`
	font-family: Gentium Basic;
	font-style: italic;
	font-weight: bold;
	background: #04b7ff;
	width: 100%;
	height: 5%;
	@media (min-width: 700px) {
		position: fixed;
	}
`;

export const Nav = styled.nav`
	width: 100%;
	background: inherit;
	text-align: center;
	@media (min-width: 700px) {
		text-align: left;
	}
`;

export const StyledLink = styled(Link)`
	display: inline-block;
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

// SignUpPage and SignInPage

export const inputStyles = css`
	width: 20rem;
	background: #ffffff;
	border: 1px solid #2f2f2f;
	border-radius: 5px;
	font-family: Gentium Basic;
	margin-top: 0.8rem;
	font-size: 1.2rem;
	padding: 1rem;
	font-weight: bold;
	color: #918383;
`;

export const Main = styled.main`
	width: 100%;
	text-align: center;
	display: flex;
	flex-direction: column;
	@media (min-width: 700px) {
		flex-direction: row;
		height: 100vh;
	}
`;

export const Wrapper = styled.section`
	background: #e1f6fe;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;

	@media (min-width: 700px) {
		background-image: url(${BgImage});
		background-size: 232px;
		background-repeat: no-repeat;
		background-position: center bottom;
		background-size: 282px;
		width: 40%;
		margin-top: -17rem;
	}
	@media (min-width: 1000px) {
		background-size: 380px;
	}

	@media (min-width: 1400px) {
		background-size: 462px;
	}
`;

export const H2 = styled.h2`
	font-size: 2.8rem;
	font-weight: bold;
	line-height: 56px;
	color: #2f2f2f;
	margin: 0 auto 1.5rem;

	// text-align: center;
	// margin: 0 auto; -> in Sign IN
`;

export const Pgh = styled.p`
	font-size: 2rem;
	width: 95%;
	line-height: 28px;
	@media (min-width: 700px) {
		font-size: 2.4rem;
		width: 70%;
	}
	@media (min-width: 1000px) {
		width: 50%;
	}
`;

export const ActionButton = styled(NavLink)`
	font-family: Gentium Basic;
	background: #04b7ff;
	border: 1px solid #2f2f2f;
	border-radius: 5px;
	margin-bottom: 2rem;
	font-size: 1.4rem;
	line-height: 16px;
	padding: 1.2rem 1.3rem;
	width: 15rem;
	font-weight: bold;
	text-decoration: none;
	color: inherit;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	transition: transform 0.4s ease-in-out;

	&:hover {
		cursor: pointer;
		transform: scale(1.05);
	}

	&:focus {
		outline: none;
	}
`;

export const FormWrapper = styled.div`
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const FormElement = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	width: 100%;
	@media (min-width: 700px) {
		width: 60%;
	}
`;

export const Label = styled.label`
	font-family: Gentium Basic;
	font-weight: bold;
	font-size: 1.4rem;
	line-height: 16px;
	color: #2f2f2f;
	padding-bottom: 1.5rem;
	text-align: left;
`;

export const Input = styled(Field)`
	${inputStyles}
	@media (min-width: 700px) {
		width: 37rem;
	}
`;

export const Select = styled(Field)`
	${inputStyles}
	-webkit-appearance: none;
	@media (min-width: 700px) {
		width: 37rem;
	}
`;

export const SubmitButton = styled.button`
	background: #eeeeee;
	border: 1px solid #2f2f2f;
	border-radius: 5px;
	width: 14.2rem;
	padding: 1rem;
	margin-top: 3rem;
	margin-bottom: 3rem;
	transition: all 0.4s ease-in-out;
	&:hover {
		cursor: pointer;
		transform: scale(1.05);
	}

	&:focus {
		outline: none;
	}
`;

export const ErrorMessage = styled.p`
	font-size: 1rem;
	color: gray;
`;

// WelcomePage

export const WelcomePageWrapper = styled.div`
	width: 100%;
	font-size: 1.5rem;
`;

export const WelcomePageNav = styled.nav`
	background: inherit;
	background: #04b7ff;
	font-style: italic;
	font-weight: bold;
	padding: 2rem;
	display: flex;
	align-items: center;
	@media (min-width: 700px) {
		text-align: right;
	}
`;

export const NavItem = styled.a`
	color: #2f2f2f;
	text-decoration: none;
	padding: 0 2rem;
	font-size: 1.8rem;
	&:first-child {
		flex-grow: 2;
		text-align: left;
		font-size: 3.6rem;
	}
`;

export const SignOutButton = styled.button`
	dispbackground: #eee;
	border: none;
	border-radius: 5px;
	padding: 0.6rem 2rem;
	font-style: normal;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.4s ease-in-out;
	&:hover {
		color: #810000;
		background: #ff9999;
	}
`;

export const RequestCardsWrapper = styled.section`
	display: flex;
	color: #2f2f2f;
	width: 90%;
	margin: 3rem auto;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
`;

// RequestCard

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 25rem;
	max-width: 120rem;
	justify-content: center;
	background: #e1f6fe;
	border-radius: 5px;
	margin-bottom: 2%;
`;

export const CardIconsContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 0;
`;

export const CardIcons = styled.span`
	margin: 1rem 1rem 0 0;
`;

export const CardContent = styled.ul`
	list-style: none;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const CardItem = styled.li`
	font-size: 1.5rem;
	padding-top: 0.4rem;
	&:first-child {
		font-size: 2rem;
		padding: 1rem 0;
		font-weight: normal;
	}
`;
export const Span = styled.span`
	font-weight: bold;
`;

export const Icon = styled(FontAwesomeIcon)`
	color: #04b7ff;
`;

export const AcceptButton = styled.button`
	width: 8rem;
	text-align: rigth;
	margin-left: auto;
	border: 1px solid #2f2f2f;
	border-radius: 5px;
	background: #fff;
	padding: 1rem;
	font-size: 1.1rem;
`;

// SearchForm and RequestForm

export const SearchFormWrapper = styled.section`
	display: flex;
	color: #2f2f2f;
	background: #eee;
	width: 90%;
	margin: 3rem auto;
`;

export const RequestFormWrapper = styled(SearchFormWrapper)``;

export const SearchFormElement = styled(Form)`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
	width: 70%;
	padding: 2rem;
`;

export const RequestFormElement = styled(SearchFormElement)``;

export const SerachButton = styled(SubmitButton)`
	background: #fff;
	width: 20%;
	margin-bottom: 2rem;
	margin-right: 0;
	font-weight: bold;
`;

export const PostButton = styled(SerachButton)``;
