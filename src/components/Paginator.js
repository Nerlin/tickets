import React from "react";
import PropTypes from "prop-types";
import "./Paginator.css";
import Action from "./Action";


const Paginator = ({ page: currentPage, pageSize, count, onPageChange }) => {
  const lastPage = Math.floor(count / pageSize) + 1;
  const incorrectCurrentPage = currentPage < 1 || currentPage > lastPage;

  return (
    <div className={"paginator"}>
      <Action
        text={"Previous"}
        disabled={incorrectCurrentPage || currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      />

      <input
        key={currentPage}
        defaultValue={currentPage}
        type={"number"}
        min={1}
        max={lastPage}
        step={1}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onPageChange(parseInt(e.currentTarget.value, 10))
          }
        }}
        onBlur={(e) => onPageChange(parseInt(e.target.value, 10))}
      />

      <span className={"paginator__count"}>
        Found elements: <span className={"paginator__count-value"}>{count}</span>.
      </span>

      <Action
        text={"Next"}
        disabled={incorrectCurrentPage || currentPage === lastPage}
        onClick={() => onPageChange(currentPage + 1)}
      />
    </div>
  );
};

Paginator.propTypes = {
  page: PropTypes.number,
  pageSize: PropTypes.number,
  count: PropTypes.number,
  onPageChange: PropTypes.func,
};

export default Paginator;