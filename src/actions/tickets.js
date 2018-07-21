export const ADD_TICKET = "ADD_TICKET";
export const EDIT_TICKET = "EDIT_TICKET";
export const REMOVE_TICKET = "REMOVE_TICKET";
export const SELECT_TICKET = "SELECT_TICKET";
export const CLEAR_TICKET_SELECTION = "CLEAR_TICKET_SELECTION";
export const SET_TICKET_FILTERS = "SET_TICKET_FILTERS";
export const CLEAR_TICKET_FILTERS = "CLEAR_TICKET_FILTERS";
export const SORT_TICKETS = "SORT_TICKETS";
export const PAGINATE_TICKETS = "PAGINATE_TICKETS";
export const RESET_TICKET_PAGINATION = "RESET_TICKET_PAGINATION";


export const addTicket = (ticket) => ({
  type: ADD_TICKET,
  ticket
});

export const editTicket = (ticket, {label, value}) => ({
  type: EDIT_TICKET,
  ticket,
  updates: { label, value }
});

export const selectTicket = (ticket) => ({
  type: SELECT_TICKET,
  ticket
});

export const clearTicketSelection = () => ({
  type: CLEAR_TICKET_SELECTION,
});

export const removeTicket = (ticket) => ({
  type: REMOVE_TICKET,
  ticket
});

export const filterTickets = (filters) => ({
  type: SET_TICKET_FILTERS,
  filters
});

export const clearTicketFilters = () => ({
  type: CLEAR_TICKET_FILTERS
});

export const sortTickets = (sorting) => ({
  type: SORT_TICKETS,
  sorting
});

export const showTicketPage = (page) => ({
  type: PAGINATE_TICKETS,
  page
});

export const resetTicketPagination = () => ({
  type: RESET_TICKET_PAGINATION
});


export const TicketSortTypes = {
  DEFAULT: "DEFAULT",
  ASC: "ASC",
  DESC: "DESC",
};
