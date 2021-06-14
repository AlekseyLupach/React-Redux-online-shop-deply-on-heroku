import React, { memo } from "react";
import PropTypes from "prop-types";

const Search = memo(function Search({ onClickSearch }) {
  return (
    <form className="filter-input__form">
      <input
        className="filter-input"
        type="text"
        placeholder="Искать здесь..."
        onChange={onClickSearch}
      />
      <button className="filter-input__btn" type="submit">
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
    </form>
  );
});

Search.propTypes = {
  onClickSearch: PropTypes.func.isRequired,
};

export default Search;
