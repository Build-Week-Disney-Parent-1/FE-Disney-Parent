import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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