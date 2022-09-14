import React from "react";
import PropTypes from "prop-types";


function Ticket(props){
  const ticketSyledComponentStyles = {
    backgroundColor: '#be8d00',
    marginTop: '15px',
    marginLeft: '50px',
    marginRight:'50px',
    borderRadius:'15px',
    paddingTop: '10px'
  }

  return (
    <React.Fragment>
      <div onClick={() => props.whenTicketClicked(props.id)} style = {ticketSyledComponentStyles}>
          <h3>{props.location} - {props.names}</h3>
          <p><em>{props.issue}</em></p>
          <hr/>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  id: PropTypes.string,
  whenTicketClicked: PropTypes.func
};

export default Ticket;