import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Container.css";

const Container = ({ children, className = "" }) => (
  <div className={classNames("container", className)}>
    {children}
  </div>
);

Container.propTypes = {
  className: PropTypes.string
};

export default Container;