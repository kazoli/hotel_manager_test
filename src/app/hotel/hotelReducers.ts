import { tHotelActionTypes, tHotelActions, tHotelState } from './hotelTypes';

// Hotel reducers
export const hotelReducer = (state: tHotelState, action: tHotelActions) => {
  switch (action.type) {
    case tHotelActionTypes.hotelSetOccupancyParams:
      state = {
        ...state,
        occupancyFormParams: {
          ...state.occupancyFormParams,
          [action.payload.param]: action.payload.value,
        },
      };
      return state;
    case tHotelActionTypes.hotelSetOccupancyErrors:
      state = {
        ...state,
        occupancyFormErrors: {
          ...state.occupancyFormErrors,
          [action.payload.param]: action.payload.value,
        },
      };
      return state;
    default:
      return state;
  }
};
