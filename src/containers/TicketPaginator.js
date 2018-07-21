import { showTicketPage } from "../actions/tickets";
import Paginator from "../components/Paginator";
import { connect } from "react-redux";
import { getFilteredTickets } from "../selectors/tickets";

const mapStateToProps = state => ({
  page: state.tickets.pagination.page,
  pageSize: state.tickets.pagination.pageSize,
  count: getFilteredTickets(state).length,
});

const mapDispatchToProps = (dispatch) => ({
  onPageChange: (page) => {
    dispatch(showTicketPage(page))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);