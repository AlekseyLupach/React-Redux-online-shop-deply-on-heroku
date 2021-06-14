import React, { memo } from "react";
import PropTypes from "prop-types";

const Categories = memo(function Categories({
  activeCategory,
  items,
  onClickCategory,
}) {
  return (
    <div className="filter">
      <button
        className={activeCategory === null ? "catalogbtnactive" : ""}
        onClick={() => {
          onClickCategory(null);
        }}
      >
        All
      </button>
      {items &&
        items.map((name, index) => (
          <button
            className={activeCategory === index ? "catalogbtnactive" : ""}
            onClick={() => {
              onClickCategory(index);
            }}
            key={`${name}_${index}`}
          >
            {name}
          </button>
        ))}
    </div>
  );
});

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired,
};

Categories.defaultProps = {
  activeCategory: null,
  items: [],
};

export default Categories;
