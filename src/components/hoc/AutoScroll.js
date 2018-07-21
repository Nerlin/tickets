import React from "react";
import PropTypes from "prop-types";


export const withScroll = Component => (props) => (
  <AutoScroll>
    <Component {...props} /> 
  </AutoScroll>
);

export class AutoScroll extends React.Component {
  static defaultProps = {
    alignToTop: true,
  };

  static propTypes = {
    alignToTop: PropTypes.bool,
  }

  containerRef = React.createRef();

  render() {
    return (
      <div className="scrolled" ref={this.containerRef}>
        {this.props.children}
      </div>
    );
  }

  componentDidMount() {
    this.containerRef.current.scrollIntoView(this.props.alignToTop);
  }
}