import React from "react";
import PropTypes from "prop-types";
import { TicketSortTypes } from "../actions/tickets";
import Container from "./Container";

import "./TicketSorting.css";


export default class TicketSorting extends React.Component {
  static propTypes = {
    value: PropTypes.oneOf([
      TicketSortTypes.DEFAULT,
      TicketSortTypes.ASC,
      TicketSortTypes.DESC
    ]),
    onChange: PropTypes.func,
  };

  render() {
    return (
      <Container className={"ticket-sorting"}>
        <label>
          <span className={"ticket-sorting__label"}>Sorting</span>
          <select className={"ticket-sorting__input"} value={this.props.value} onChange={this.handleChange}>
            <option value={TicketSortTypes.DEFAULT}>Default</option>
            <option value={TicketSortTypes.ASC}>Ascending</option>
            <option value={TicketSortTypes.DESC}>Descending</option>
          </select>  
        </label>
      </Container>
    );
  }

  handleChange = (event) => {
    this.props.onChange(event.target.value);
  }
}