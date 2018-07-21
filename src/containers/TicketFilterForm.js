import { filterTickets, clearTicketFilters, resetTicketPagination } from "../actions/tickets";
import TicketForm from "../components/TicketForm";
import { connect } from "react-redux";


const mapStateToProps = (state) => ({
  initial: { ...state.tickets.filter },
  formTitle: "Filters"
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: ({ data: filters }) => {
    dispatch(filterTickets(filters))
    dispatch(resetTicketPagination());
  },
  onCancel: () => {
    dispatch(clearTicketFilters());
    dispatch(resetTicketPagination());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketForm);