import { connect } from "react-redux";
import TicketList from "../components/TicketList";
import { removeTicket, selectTicket, addTicket } from "../actions/tickets";
import { getPaginatedTickets } from "../selectors/tickets";


const mapStateToProps = (state) => ({
  tickets: getPaginatedTickets(state)
});

const mapDispatchToProps = (dispatch) => ({
  onAdd: () => {
    const newTicket = { label: "", value: "" };
    dispatch(addTicket(newTicket));
    dispatch(selectTicket(newTicket));
  },
  onEdit: (ticket) => {
    dispatch(selectTicket(ticket));
  },
  onRemove: (ticket) => {
    dispatch(removeTicket(ticket));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);