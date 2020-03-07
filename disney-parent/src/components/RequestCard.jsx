import React , { useState } from 'react';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import EditCard from './EditCard'
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
	// function passed as a prop, to delete a card
	const { handleDelete, item } = props

	// state that controls card data
	const [cardData, setCardData] = useState(item)

	// state to track if request has been accepted or not
	const [accepted, setAccepted] = useState(cardData.isAccepted)

	// State for the edit modal
	const [modalIsOpen,setIsOpen] = React.useState(false);

	// toggle state from false to true using reverse logic
	// if a button is disabled / state is true, this will not run
	function handleAccepted(){
		setAccepted(!accepted)
	}

	/*
		function is made insto a async function so
		that we can wate for state to update
		beofer we close out our modal.
		Since setting state is asycnronous we
		need to wait for the state assignment to complete
	*/
	async function updateCard(newInfo){
		await setCardData(newInfo)
	}


	return (
		<Card>
			<CardIconsContainer>
				<CardIcons>
					<Icon icon={faTrash} onClick={() => handleDelete(cardData.id)}/>
				</CardIcons>
				<CardIcons>
					<Icon icon={faEdit} onClick={() => setIsOpen(!modalIsOpen)}/>
					<EditCard modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} updateCard={updateCard}/>
				</CardIcons>
			</CardIconsContainer>
			<CardContent>
				<CardItem>
					<Span>Brittany Wisher</Span>
				</CardItem>
				<CardItem>
					<Span>{cardData.request}</Span>
				</CardItem>
				<CardItem>
					<Span> @ </Span>
					{cardData.time}
					<Span> In front of:</Span> {cardData.location}
				</CardItem>
				<CardItem>
					<Span>Swap rides on:</Span> {cardData.ride}
				</CardItem>
				<CardItem>
					<Span>We have:</Span>
					{Number(cardData.children) === 1
						? `${cardData.children} child`
						: `${cardData.children} children`}
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
