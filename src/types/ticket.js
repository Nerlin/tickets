import PropTypes from "prop-types";


const TicketType = PropTypes.shape({
  label: PropTypes.string,
  value: PropTypes.string
});

export default TicketType;