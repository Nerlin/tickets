import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Action.css";

const Action = ({ text, disabled, className = "", onClick }) => (
  <span className={classNames("action", {"action_disabled": disabled}, className)} onClick={disabled ? undefined : onClick}>
    {text}
  </span>
);

Action.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Action;