import React, { useContext, useReducer, createContext } from "react";
import {
  ActionType,
  initialState,
  todoListType,
  todoReducer,
} from "./todoReducer";

const Store = createContext<todoListType>(initialState);

const DispatchContext = createContext<React.Dispatch<ActionType>>(() => {});

export const useStore = () => useContext(Store);
export const useDispatch = () => useContext(DispatchContext);

type props = {
  children?: React.ReactNode;
};

export const StoreProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <Store.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </Store.Provider>
  );
};
