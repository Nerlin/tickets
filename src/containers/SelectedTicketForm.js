import React from "react";
import { editTicket, clearTicketSelection } from "../actions/tickets";
import { connect } from "react-redux";
import TicketForm from "../components/TicketForm";
import { compose } from "redux";
import { AutoScroll } from "../components/hoc/AutoScroll";

const mapStateToProps = (state) => ({
  selectedTicket: state.tickets.selected,
  formTitle: "Edit Ticket Form"
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ data, initial }) => {
    dispatch(editTicket( initial, data ));
    dispatch(clearTicketSelection());
  },
  onCancel: () => {
    dispatch(clearTicketSelection());
  }
});

const SelectedTicketForm = ({ selectedTicket, ...props }) => (
  selectedTicket && 
  <AutoScroll key={selectedTicket.label} alignToTop={false}>
    <TicketForm key={selectedTicket.label} initial={selectedTicket} {...props} />
  </AutoScroll>
);

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(SelectedTicketForm);