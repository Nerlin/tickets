import {
  TicketSortTypes,
  ADD_TICKET,
  EDIT_TICKET,
  REMOVE_TICKET,
  SET_TICKET_FILTERS,
  SORT_TICKETS,
  PAGINATE_TICKETS,
  CLEAR_TICKET_FILTERS,
  SELECT_TICKET,
  CLEAR_TICKET_SELECTION,
  RESET_TICKET_PAGINATION
} from "../actions/tickets";


export const defaultTicketPagination = {
  page: 1,
  pageSize: 50,
};

export const defaultTicketFilters = {
  label: "",
  value: "",
};

export const defaultTicketsState = {
  items: [],
  pagination: defaultTicketPagination,
  filter: defaultTicketFilters,
  sorting: TicketSortTypes.DEFAULT,
  selected: null,
};


export const ticketsReducer = (state = defaultTicketsState, action) => {
  switch (action.type) {
    case ADD_TICKET:
    case EDIT_TICKET:
    case REMOVE_TICKET:
      return {
        ...state,
        items: ticketList(state.items, action)
      };
    case SET_TICKET_FILTERS:
    case CLEAR_TICKET_FILTERS:
      return {
        ...state,
        filter: ticketFilter(state.filter, action)
      };
    case SORT_TICKETS:
      return {
        ...state,
        sorting: action.sorting
      };
    case SELECT_TICKET:
    case CLEAR_TICKET_SELECTION:
      return {
        ...state,
        selected: selection(state.selected, action)
      };
    case PAGINATE_TICKETS:
    case RESET_TICKET_PAGINATION:
      return {
        ...state,
        pagination: pagination(state.pagination, action)
      };
    default:
      return state;
  }
}

const ticketList = (state = [], action) => {
  switch (action.type) {
    case ADD_TICKET:
      return [action.ticket, ...state];
    case EDIT_TICKET:
      return state.map((ticket) => action.ticket === ticket ? action.updates : ticket);
    case REMOVE_TICKET:
      const tickets = [...state];
      const ticketIndex = tickets.indexOf(action.ticket);
      if (ticketIndex !== -1) {
        tickets.splice(ticketIndex, 1);
      }
      return tickets;
    default:
      return state;
  }
}

const ticketFilter = (state = defaultTicketFilters, action) => {
  switch (action.type) {
    case SET_TICKET_FILTERS:
      return {
        label: action.filters.label,
        value: action.filters.value
      };
    case CLEAR_TICKET_FILTERS:
      return defaultTicketFilters;
    default:
      return state;
  }
};

const pagination = (state = defaultTicketPagination, action) => {
  switch (action.type) {
    case PAGINATE_TICKETS:
      return {
        ...state,
        page: action.page
      };
    case RESET_TICKET_PAGINATION:
      return defaultTicketPagination;
    default:
      return state;
  }
};

const selection = (state = null, action) => {
  switch (action.type) {
    case SELECT_TICKET:  
      return action.ticket;
    case CLEAR_TICKET_SELECTION:
      return null;
    default:
      return state;
  }
};