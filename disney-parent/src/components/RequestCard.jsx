import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
	Card,
	CardIconsContainer,
	CardIcons,
	CardContent,
	CardItem,
	Span,
	AcceptButton,
	Icon
} from './styles';

function RequestCard(props) {
	
	return (
		<Card>
			<CardIconsContainer>
				<CardIcons>
					<Icon icon={faTrash} />
				</CardIcons>
				<CardIcons>
					<Icon icon={faEdit} />
				</CardIcons>
			</CardIconsContainer>
			<CardContent>
				<CardItem>
					<Span>Brittany Wisher</Span>
				</CardItem>
				<CardItem>
					<Span>{props.item.request}</Span>
				</CardItem>
				<CardItem>
					<Span> @ </Span>
					{props.item.time}
					<Span> In front of:</Span> {props.item.location}
				</CardItem>
				<CardItem>
					<Span>Swap rides on:</Span> {props.item.ride}
				</CardItem>
				<CardItem>
					<Span>We have:</Span>
					{Number(props.item.children) === 1
						? `${props.item.children} child`
						: `${props.item.children} children`}
				</CardItem>
			</CardContent>
			<AcceptButton>Accept</AcceptButton>
		</Card>
	);
}

export default RequestCard;
