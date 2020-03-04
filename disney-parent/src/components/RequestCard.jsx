import React from 'react';
import {
	Card,
	CardIconsContainer,
	CardIcons,
	CardContent,
	CardItem,
	Span,
	AcceptButton
} from './styles';

function RequestCard(props) {
	return (
		<Card>
			<CardIconsContainer>
				<CardIcons>X</CardIcons>
				<CardIcons>Edit</CardIcons>
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
