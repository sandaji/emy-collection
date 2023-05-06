import { createContext, useReducer, ReactNode } from "react";
import DarkModeReducer from "./darkModeReducer";

type State = {
  darkMode: boolean;
};

type Action = { type: "LIGHT" } | { type: "DARK" } | { type: "TOGGLE" };

type DarkModeContextProps = {
  children: ReactNode;
};

const INITIAL_STATE: State = {
  darkMode: false,
};

export const DarkModeContext = createContext(
  {} as {
    state: State;
    dispatch: React.Dispatch<Action>;
  }
);

export const DarkModeContextProvider = ({ children }: DarkModeContextProps) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ state, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
