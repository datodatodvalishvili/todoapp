import React, { memo } from "react";
import { filterType } from "../../Store/todoReducer";
import FilterItem from "./FilterItem";

const filters: filterType[] = ["All", "Active", "Completed"];

const ListFilter = () => {
  return (
    <div className="flex">
      {filters.map((filter) => {
        return (
          <FilterItem
            key={filter}
            filterText={filter}
          />
        );
      })}
    </div>
  );
};

export default memo(ListFilter);
