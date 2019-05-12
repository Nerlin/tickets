import React from "react";
import PropTypes from "prop-types";
import Action from "./Action";
import "./Paginator.css";


class Paginator extends React.Component {
  render() {
    let { page: currentPage, pageSize, count } = this.props;
    const lastPage = Math.floor(count / pageSize) + 1;
    const incorrectCurrentPage = currentPage < 1 || currentPage > lastPage;
    return (
      <div className={"paginator"}>
        <Action
          text={"Previous"}
          disabled={incorrectCurrentPage || currentPage === 1}
          onClick={this.changeToPreviousPage}
        />

        <input
          key={currentPage}
          defaultValue={currentPage}
          type={"number"}
          min={1}
          max={lastPage}
          step={1}
          onKeyPress={this.handlePageInputKeyPress}
          onBlur={this.handlePageInputBlur}
        />

        <span className={"paginator__count"}>
        Found elements: <span className={"paginator__count-value"}>{count}</span>.
      </span>

        <Action
          text={"Next"}
          disabled={incorrectCurrentPage || currentPage === lastPage}
          onClick={this.changeToNextPage}
        />
      </div>
    );
  }

  changeToPreviousPage = () => {
    this.props.onPageChange(this.props.page - 1);
  }

  changeToNextPage = () => {
    this.props.onPageChange(this.props.page + 1);
  }

  handlePageInputKeyPress = (e) => {
    if (e.key === "Enter") {
      this.props.onPageChange(parseInt(e.target.value, 10));
    }
  }

  handlePageInputBlur = (e) => {
    this.props.onPageChange(parseInt(e.target.value, 10))
  }
}

Paginator.propTypes = {
  page: PropTypes.number,
  pageSize: PropTypes.number,
  count: PropTypes.number,
  onPageChange: PropTypes.func,
};

export default Paginator;