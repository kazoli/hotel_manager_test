import { createContext, useContext, ReactNode, Dispatch, useReducer } from 'react';
import { tHotelActions, tHotelState } from '../../app/hotel/hotelTypes';
import { hotelInitialState } from '../../app/hotel/hotelInitialStates';
import { hotelReducer } from '../../app/hotel/hotelReducer';

// Type of context
type tContext = {
  hotelState: tHotelState;
  hotelDispatch: Dispatch<tHotelActions>;
};

// Type of props
type tProps = {
  children: ReactNode;
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
  // get state and dipatch from reducer
  const [hotelState, hotelDispatch] = useReducer(hotelReducer, hotelInitialState);

  return (
    <Context.Provider value={{ hotelState, hotelDispatch }}>{props.children}</Context.Provider>
  );
}

export { ContextProvider, useAppContext };
