import { createContext, useContext, ReactNode, Dispatch } from 'react';
import { tHotelActions, tHotelState } from '../../app/hotel/hotelTypes';
import { hotelInitialState } from '../../app/hotel/hotelInitialStates';

// Type of context
type tContext = {
  hotelState: tHotelState;
  hotelDispatch: Dispatch<tHotelActions>;
};

// Type of props
type tProps = {
  children: ReactNode;
  value: tContext;
};

// Initial state of context
const contextInitialState: tContext = {
  hotelState: hotelInitialState,
  hotelDispatch: () => null,
};

// Create context
const Context = createContext(contextInitialState);

// Context custom hook
function useAppContext() {
  return useContext(Context);
}

// Context provider
function ContextProvider(props: tProps) {
  return <Context.Provider value={props.value}>{props.children}</Context.Provider>;
}

export { ContextProvider, useAppContext };
