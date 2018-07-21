import { createSelector } from "reselect";
import { TicketSortTypes } from "../actions/tickets";
import { compareStrings } from "../comparators";

export const getTickets = (state) => state.tickets.items;
export const getTicketFilters = (state) => state.tickets.filter;

export const getFilteredTickets = createSelector(
  [getTickets, getTicketFilters],
  (tickets, filters) => {
    const searchedLabel = filters.label.toLowerCase();
    const searchedValue = filters.value.toLowerCase();

    return tickets.filter(ticket => 
      ticket.label.toLowerCase().includes(searchedLabel) && 
      ticket.value.toLowerCase().includes(searchedValue)
    );
  }
);

export const getTicketSorting = (state) => state.tickets.sorting;
export const getSortedTickets = createSelector(
  [getFilteredTickets, getTicketSorting],
  (tickets, sorting) => {
    if (sorting === TicketSortTypes.DEFAULT) {
       return tickets;
    } 
    
    const sortedTickets = [...tickets];
    sortedTickets.sort((a, b) => {
      if (sorting === TicketSortTypes.ASC) {
        return compareStrings(a.label, b.label);
      } else if (sorting === TicketSortTypes.DESC) {
        return compareStrings(b.label, a.label);
      }
      return 0;
    });
    return sortedTickets;
  }
);

export const getTicketPagination = (state) => state.tickets.pagination;
export const getPaginatedTickets = createSelector(
  [getSortedTickets, getTicketPagination],
  (tickets, pagination) => (
    pagination.page > 0 
      ? tickets.slice((pagination.page - 1) * pagination.pageSize, pagination.page * pagination.pageSize)
      : []
  )
);
