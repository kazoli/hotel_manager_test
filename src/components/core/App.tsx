import { useReducer } from 'react';
import { hotelReducer } from '../../app/hotel/hotelReducers';
import { hotelInitialState } from '../../app/hotel/hotelInitialStates';
import { ContextProvider } from './Context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from './Router';

function App() {
  const [hotelState, hotelDispatch] = useReducer(hotelReducer, hotelInitialState);

  return (
    <ContextProvider
      value={{
        hotelState: hotelState,
        hotelDispatch: hotelDispatch,
      }}
    >
      <Router />
      <ToastContainer autoClose={5000} />
    </ContextProvider>
  );
}

export default App;
