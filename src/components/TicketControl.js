// Parent Component for NewTicketForm.js and TicketList.js

import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import EditTicketForm from './EditTicketForm';
import { connect } from 'react-redux';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      formVisibleOnPage: false,  //new ticket form
      selectedTicket: null,
      editing: false // Form for editing ticket
    };
  }

  handleAddingNewTicketToList = (newTicket) => {
    const { dispatch } = this.props;
    const { id, names, location, issue } = newTicket;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      names: names,
      location: location,
      issue: issue,
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
  }

  handleDeletingTicket = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_TICKET',
      id: id
    }
    dispatch(action);
    this.setState({selectedTicket: null});
  }
  
  handleEditingTicketInList = (ticketToEdit) => {
    const { dispatch } = this.props;
    const { id, names, location, issue } = ticketToEdit;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      names: names,
      location: location,
      issue: issue,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedTicket: null
    });
  }

  handleEditClick = (id) => {
      console.log("handleEditClick reached!");
      this.setState({editing: true});
  }
  
  handleClick = () => {
    if(this.state.selectedTicket != null) {
      this.setState ({
        formVisibleOnPage: false,
        selectedTicket: null,
        editing: false
      });
    } else {
	  this.setState(prevState => ({
		  formVisibleOnPage: !prevState.formVisibleOnPage
	  }));
  }
}
  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter(ticket=> ticket.id === id)[0];
    this.setState({selectedTicket : selectedTicket});
  }

render(){
  const styledButton = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '20px',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '800',
    margin: 'auto'
    }
    
	let currentlyVisibleState = null;
	let buttonText = null; 

  if (this.state.editing) {
    currentlyVisibleState = <EditTicketForm ticket = {this.state.selectedTicket} onEditTicket = {this.handleEditingTicketInList} />
    buttonText = "Return to Ticket List";
  } else if (this.state.selectedTicket != null) {
    currentlyVisibleState = 
    <TicketDetail 
      ticket = {this.state.selectedTicket} 
      onClickingDelete = {this.handleDeletingTicket} 
      onClickingEdit = {this.handleEditClick} />
    buttonText = "Return to Ticket List";
  }
	else if (this.state.formVisibleOnPage) {
		currentlyVisibleState = 
    <NewTicketForm 
     onNewTicketCreation={this.handleAddingNewTicketToList} />;
		
    buttonText = "Return to Ticket List"; 
	} else {
		currentlyVisibleState = 
    <TicketList 
      ticketList={this.state.mainTicketList} 
      onTicketSelection ={this.handleChangingSelectedTicket} />

    buttonText = "Add Ticket" 
	}
	return (
		<React.Fragment>
			{currentlyVisibleState}
			<button style= {styledButton} onClick={this.handleClick}>{buttonText}</button> 
		</React.Fragment>
	);
}

}
TicketControl = connect()(TicketControl);

export default TicketControl;