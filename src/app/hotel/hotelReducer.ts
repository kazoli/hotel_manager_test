import { tHotelActionTypes, tHotelActions, tHotelState } from './hotelTypes';
import { hotelInitialState } from './hotelInitialStates';

// Hotel reducer
export const hotelReducer = (state: tHotelState, action: tHotelActions) => {
  switch (action.type) {
    case tHotelActionTypes.hotelSetStatus:
      state = {
        ...state,
        status: action.payload,
      };
      return state;
    case tHotelActionTypes.hotelResetOccupancyForm:
      state = {
        ...state,
        status: 'idle',
        occupancyResults: hotelInitialState.occupancyResults,
        occupancyFormParams: hotelInitialState.occupancyFormParams,
        occupancyFormErrors: hotelInitialState.occupancyFormErrors,
      };
      return state;
    case tHotelActionTypes.hotelSetOccupancy:
      state = {
        ...state,
        status: 'idle',
        occupancyResults: action.payload,
      };
      return state;
    case tHotelActionTypes.hotelSetOccupancyFormParams:
      state = {
        ...state,
        status: 'validation',
        occupancyResults: {
          ...state.occupancyResults,
          show: false,
        },
        occupancyFormParams: {
          ...state.occupancyFormParams,
          [action.payload.param]: action.payload.value,
        },
      };
      return state;
    case tHotelActionTypes.hotelSetOccupancyFormErrors:
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
