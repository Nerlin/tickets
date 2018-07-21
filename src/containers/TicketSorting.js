import TicketSorting from "../components/TicketSorting";
import { connect } from "react-redux";
import { sortTickets } from "../actions/tickets";


const mapStateToProps = (state) => ({
  value: state.tickets.sorting
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (sorting) => {
    dispatch(sortTickets(sorting))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketSorting);