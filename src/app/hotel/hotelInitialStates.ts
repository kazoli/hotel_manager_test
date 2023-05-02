import { tHotelState } from './hotelTypes';
import { hotelSortGuests } from './hotelMiddlewares';
import guests from './guests.json';

// Limit of price of premium rooms
export const hotelPremiumLimitStart = 100;

// Initial state of hotel
export const hotelInitialState: tHotelState = {
  status: 'idle',
  guests: hotelSortGuests(guests, hotelPremiumLimitStart),
  occupancyResults: {
    show: false,
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
