import React from "react";
import PropTypes from "prop-types";
import Ticket from "./Ticket";
import TicketType from "../types/ticket";
import "./TicketList.css";
import Action from "./Action";


const TicketList = ({ tickets, onAdd, onEdit, onRemove }) => (
  <div className={"ticket-list"}>
    <TicketListMenuItem className={"ticket-list__add"} onClick={onAdd}>Add</TicketListMenuItem>

    {tickets.map((ticket, index) => 
      <div className={"ticket-list__item"} key={index}>
        <Ticket
          ticket={ticket}
        />
        <TicketListMenu 
          ticket={ticket}
          onEdit={onEdit}
          onRemove={onRemove}
        />
      </div>
    )}
  </div>
);

TicketList.propTypes = {
  tickets: PropTypes.arrayOf(TicketType),
  onAdd: PropTypes.func,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func
};


class TicketListMenu extends React.Component {
  static propTypes = {
    ticket: TicketType,
    onEdit: PropTypes.func,
    onRemove: PropTypes.func,
  };

  render() {
    return (
      <div className={"ticket-list-menu"}>
        <TicketListMenuItem onClick={this.handleEdit}>Edit</TicketListMenuItem>
        <TicketListMenuItem onClick={this.handleRemove}>Remove</TicketListMenuItem>
      </div>
    );
  }

  handleEdit = () => {
    this.props.onEdit(
      this.props.ticket,
    );
  }

  handleRemove = () => {
    this.props.onRemove(this.props.ticket);
  }
}

const TicketListMenuItem = ({ children, className = undefined, onClick }) => (
  <Action className={className} text={children} onClick={onClick} disabled={false} />
);
TicketListMenuItem.propTypes = {
  onClick: PropTypes.func,
};

export default TicketList;