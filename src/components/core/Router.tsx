import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HotelOccupancy from '../pages/HotelOccupancy';
import HotelGuests from '../pages/HotelGuests';
import HotelRestaurant from '../pages/HotelRestaurant';
import HotelAnalytics from '../pages/HotelAnalytics';
import NotFound from '../pages/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HotelOccupancy />} />
        <Route path="/guests" element={<HotelGuests />} />
        <Route path="/restaurant" element={<HotelRestaurant />} />
        <Route path="/analytics" element={<HotelAnalytics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
