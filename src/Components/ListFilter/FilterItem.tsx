import React, { memo, useMemo } from "react";
import { useDispatch, useStore } from "../../Store/StoreProvider";
import { filterType } from "../../Store/todoReducer";

type props = {
  filterText: filterType;
};

const FilterItem = ({ filterText }: props) => {
  const state = useStore();
  const dispatch = useDispatch();

  const isActive = useMemo(() => {
    return filterText === state.filter;
  }, [state.filter, filterText]);

  const handleToggleFilter = () => {
    dispatch({ type: "CHANGE_FILTER", payload: filterText });
  };

  return (
    <div
      onClick={handleToggleFilter}
      className={`cursor-pointer hover:text-site-black-50 py-1 px-3 rounded-sm ${
        isActive ? "border-site-red-100 border" : ""
      }`}
    >
      {filterText}
    </div>
  );
};

export default memo(FilterItem);
