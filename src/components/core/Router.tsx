import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HotelOccupancy from '../pages/HotelOccupancy';
import NotFound from '../pages/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HotelOccupancy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
