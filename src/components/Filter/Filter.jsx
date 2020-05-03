import React from "react";
import T from "prop-types";

import styles from "./Filter.module.css";

const Filter = ({ filterValue, onChangeFilter }) => {
  return (
    <div className={styles.searchContainer}>
      <label className={styles.label}>
        Find contact by name
        <input
          type="text"
          name="filter"
          value={filterValue}
          className={styles.input}
          onChange={(e) => onChangeFilter(e.target.value)}
          placeholder="Search Contact"
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: T.string.isRequired,
  onChangeFilter: T.func.isRequired,
};

export default Filter;
