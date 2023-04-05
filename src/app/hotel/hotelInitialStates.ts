import { hotelSortGuests } from './hotelMiddlewares';
import { tHotelState } from './hotelTypes';
import guests from './guests.json';

// Limit of price of premium rooms
const hotelPremiumLimitStart = 100;

// Initial state of hotel
export const hotelInitialState: tHotelState = {
  status: 'idle',
  guests: hotelSortGuests(guests, hotelPremiumLimitStart),
  occupancy: {
    premiumRooms: 0,
    economyRooms: 0,
    premiumRoomIncome: 0,
    economyRoomIncome: 0,
    totalRoomIncome: 0,
  },
  occupancyFormParams: {
    premiumRooms: '',
    economyRooms: '',
  },
  occupancyFormErrors: {
    premiumRooms: '',
    economyRooms: '',
  },
};
