import { tHotelActionTypes, tHotelActions, tHotelState } from './hotelTypes';

// Hotel reducers
export const hotelReducer = (state: tHotelState, action: tHotelActions) => {
  switch (action.type) {
    case tHotelActionTypes.action:
      return state;
    default:
      return state;
  }
};
