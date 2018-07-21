import React from "react";
import PropTypes from "prop-types";
import "./Ticket.css";


const Ticket = ({ ticket: {label, value} }) => (
  <div className={"ticket"}>
    <div className={"ticket__label"}>{label || "<No name>"}</div>
    <div className={"ticket__value"}>{value}</div>
  </div>
);

Ticket.propTypes = {
  ticket: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string
  })
};

export default Ticket;