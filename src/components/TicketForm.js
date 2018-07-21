import React from "react";
import PropTypes from "prop-types";
import TicketType from "../types/ticket";
import Container from "./Container";
import "./TicketForm.css";

export default class TicketForm extends React.Component {
  static propTypes = {
    initial: TicketType,
    formTitle: PropTypes.string,
    submitTitle: PropTypes.string,
    cancelTitle: PropTypes.string,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func
  };

  static defaultProps = {
    initial: {},
    formTitle: "Ticket Form",
    submitTitle: "Submit",
    cancelTitle: "Cancel",
  }; 

  constructor(props) {
    super(props);
    this.state = {
      label: props.initial.label,
      value: props.initial.value
    };
  }

  render() {
    return (
      <Container>
        <form className={"ticket-form"} onSubmit={this.submit}>
          <div className={"form__title"}>
            {this.props.formTitle}
          </div>

          <div className={"form-group"}>
            <label>
              <span className={"form-group__label"}>Label</span>
              <input className={"form-group__input"} name={"label"} value={this.state.label} onChange={this.handleInputChange} />
            </label>
          </div>

          <div className={"form-group"}>
            <label>
              <span className={"form-group__label"}>Value</span> 
              <input className={"form-group__input"} name={"value"} value={this.state.value} onChange={this.handleInputChange} />
            </label>
          </div>

          <div className={"form-buttons"}>
            <button onClick={this.submit}>{this.props.submitTitle}</button>
            <button onClick={this.clear}>{this.props.cancelTitle}</button>
          </div>
        </form>
      </Container>
    );
  } 

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      data: {...this.state},
      initial: this.props.initial
    });
  }

  clear = () => {
    this.setState({ label: "", value: "" });
    this.props.onCancel();
  }
}