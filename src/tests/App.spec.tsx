import { useReducer } from 'react';
import { render, renderHook, screen } from '@testing-library/react';
import { hotelReducer } from '../app/hotel/hotelReducer';
import { hotelInitialState } from '../app/hotel/hotelInitialStates';
import { ContextProvider } from '../components/core/Context';
import { BrowserRouter } from 'react-router-dom';
import HotelOccupancy from '../components/pages/HotelOccupancy';

const { result } = renderHook(() => useReducer(hotelReducer, hotelInitialState));
const [hotelState, hotelDispatch] = result.current;

describe('render hotel manager', () => {
  it('should render Hotel occupancy page correctly and test logo exists', () => {
    render(
      <ContextProvider
        value={{
          hotelState: hotelState,
          hotelDispatch: hotelDispatch,
        }}
      >
        <BrowserRouter>
          <HotelOccupancy />
        </BrowserRouter>
      </ContextProvider>,
    );
    const linkElement = screen.getByText(/hotel manager/i);
    expect(linkElement).toBeInTheDocument();
  });
});
