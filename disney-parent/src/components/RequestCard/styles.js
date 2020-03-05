import styled from 'styled-components';

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 25rem;
	max-width: 50rem;
	background: #eee;
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

export const Ul = styled.ul`
	list-style: none;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
export const Li = styled.li`
	font-size: 1.5rem;
	padding-top: 0.4rem;
	&:first-child {
		font-size: 2rem;
		padding: 1rem 0;
	}
`;
export const Span = styled.span`
	font-weight: bold;
`;

export const Button = styled.button`
	width: 18%;
	text-align: rigth;
	margin-left: auto;
	margin-right: 1rem;
	border: 1px solid #2f2f2f;
	border-radius: 5px;
	background: #fff;
	padding: 1rem;
	font-size: 1.1rem;
	font-weight: bold;
	transition: all 0.4s ease-in-out;
	&:hover {
		cursor: pointer;
		transform: scale(1.05);
	}
`;