import { render, screen } from '@testing-library/react';
import { ContextProvider } from '../components/core/Context';
import { BrowserRouter } from 'react-router-dom';
import HotelOccupancy from '../components/pages/HotelOccupancy';

describe('render hotel manager', () => {
  it('should render Hotel occupancy page correctly and test logo exists', () => {
    render(
      <ContextProvider>
        <BrowserRouter>
          <HotelOccupancy />
        </BrowserRouter>
      </ContextProvider>,
    );
    const linkElement = screen.getByText(/hotel manager/i);
    expect(linkElement).toBeInTheDocument();
  });
});
