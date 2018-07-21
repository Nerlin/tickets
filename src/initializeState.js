import { TicketSortTypes } from "./actions/tickets";
import { defaultTicketFilters, defaultTicketPagination } from "./reducers/tickets";

const MAX_TICKETS = 10000;

export const initializeState = () => {
  const tickets = [];
  for (let ticketIndex = 1; ticketIndex <= MAX_TICKETS; ticketIndex++) {
    tickets.push({
      label: `Ticket #${ticketIndex}`,
      value: `Ticket #${ticketIndex} Description`, 
    });
  }

  return {
    tickets: {
      items: tickets,
      filter: defaultTicketFilters,
      sorting: TicketSortTypes.DEFAULT,
      pagination: defaultTicketPagination,
      selected: null,
    }
  };
}