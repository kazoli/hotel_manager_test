import guests from './guests.json';
import { tHotelState } from './hotelTypes';

// Initial state of hotel
export const hotelInitialState: tHotelState = {
  guestList: guests,
};
