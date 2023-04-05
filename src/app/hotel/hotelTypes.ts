import { tActionMap } from '../general/types';

// Type of state of hotel
export type tHotelState = {
  status: 'idle' | 'validation' | 'calculation';
  guests: { economy: number[]; premium: number[] };
  occupancy: {
    premiumRooms: number;
    economyRooms: number;
    premiumRoomIncome: number;
    economyRoomIncome: number;
    totalRoomIncome: number;
  };
  occupancyFormParams: {
    premiumRooms: string;
    economyRooms: string;
  };
  occupancyFormErrors: {
    premiumRooms: string;
    economyRooms: string;
  };
};

// Types of actions for hotel reducer
export enum tHotelActionTypes {
  hotelSetStatus = 'hotelSetStatus',
  hotelResetOccupancyForm = 'hotelResetOccupancyForm',
  hotelSetOccupancy = 'hotelSetOccupancy',
  hotelSetOccupancyParams = 'hotelSetOccupancyParams',
  hotelSetOccupancyErrors = 'hotelSetOccupancyErrors',
}

// Types of payloads of hotel actions
type tHotelPayload = {
  [tHotelActionTypes.hotelSetStatus]: tHotelState['status'];
  [tHotelActionTypes.hotelResetOccupancyForm]: undefined;
  [tHotelActionTypes.hotelSetOccupancy]: tHotelState['occupancy'];
  [tHotelActionTypes.hotelSetOccupancyParams]: {
    param: keyof tHotelState['occupancyFormParams'];
    value: tHotelState['occupancyFormParams'][keyof tHotelState['occupancyFormParams']];
  };
  [tHotelActionTypes.hotelSetOccupancyErrors]: {
    param: keyof tHotelState['occupancyFormErrors'];
    value: tHotelState['occupancyFormErrors'][keyof tHotelState['occupancyFormErrors']];
  };
};

// Types of hotel actions
export type tHotelActions = tActionMap<tHotelPayload>[keyof tActionMap<tHotelPayload>];
