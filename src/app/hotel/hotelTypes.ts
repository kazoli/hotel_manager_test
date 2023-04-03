// Type of state of hotel
export type tHotelState = {
  guestList: number[];
  occupancyFormParams: {
    allowUpgrade: boolean;
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
  hotelSetOccupancyParams = 'hotelSetOccupancyParams',
  hotelSetOccupancyErrors = 'hotelSetOccupancyErrors',
}

// Type of payloads of hotel actions
type tHotelPayload = {
  [tHotelActionTypes.hotelSetOccupancyParams]: {
    param: keyof tHotelState['occupancyFormParams'];
    value: tHotelState['occupancyFormParams'][keyof tHotelState['occupancyFormParams']];
  };
  [tHotelActionTypes.hotelSetOccupancyErrors]: {
    param: keyof tHotelState['occupancyFormErrors'];
    value: tHotelState['occupancyFormErrors'][keyof tHotelState['occupancyFormErrors']];
  };
};

// Action map for reducer
type tActionMap<T extends { [key: string]: any }> = {
  [Key in keyof T]: T[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: T[Key];
      };
};

// Type of hotel actions
export type tHotelActions = tActionMap<tHotelPayload>[keyof tActionMap<tHotelPayload>];
