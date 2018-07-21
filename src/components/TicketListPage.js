import React from "react";
import TicketList from "../containers/TicketList";
import TicketSorting from "../containers/TicketSorting";
import TicketFilterForm from "../containers/TicketFilterForm";
import SelectedTicketForm from "../containers/SelectedTicketForm";
import TicketPaginator from "../containers/TicketPaginator";


const TicketListPage = () => (
  <div className={"ticket-list-page"}>
    <TicketFilterForm />
    <TicketSorting />
    <SelectedTicketForm />

    <TicketPaginator />
    <TicketList />
    <TicketPaginator />
  </div>
);

export default TicketListPage;