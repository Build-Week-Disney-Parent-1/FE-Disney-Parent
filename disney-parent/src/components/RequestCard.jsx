import React , { useState } from 'react';
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

	const [accepted, setAccepted] = useState(props.item.isAccepted)

	// toggle state from false to true using reverse logic
	// if a button is disabled / state is true, this will not run
	function handleAccepted(){
		setAccepted(!accepted)
	}


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
			<AcceptButton 
				disabled = {accepted}
				id = "acceptButton"
				style={{
					background: accepted ? "#79D8FE": "#fff", 
					color: "black"
				}}
				onClick={() => handleAccepted()}
				>Accept</AcceptButton>
		</Card>
	);
}

export default RequestCard;
