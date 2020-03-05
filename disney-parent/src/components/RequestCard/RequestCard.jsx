import React from 'react';
import { 
	Card, 
	CardIconsContainer, 
	CardIcons, 
	Ul, 
	Li, 
	Span, 
	Button 
} from './styles' 

function RequestCard(props) {
	return (
		<Card>
			<CardIconsContainer>
				<CardIcons>X</CardIcons>
				<CardIcons>Edit</CardIcons>
			</CardIconsContainer>
			<Ul>
				<Li>
					<Span>Brittany Wisher</Span>
				</Li>
				<Li>
					<Span>{props.item.request}</Span>
				</Li>
				<Li>
					<Span> @ </Span>
					{props.item.time}
					<Span> In front of:</Span> {props.item.location}
				</Li>
				<Li>
					<Span>Swap rides on:</Span> {props.item.ride}
				</Li>
				<Li>
					<Span>We have:</Span>{' '}
					{Number(props.item.children) === 1
						? `${props.item.children} child`
						: `${props.item.children} children`}
				</Li>
			</Ul>
			<Button>Accept</Button>
		</Card>
	);
}

export default RequestCard;
