// Type of state of hotel
export type tHotelState = {
  guestList: number[];
};

// Types of actions for hotel reducer
export enum tHotelActionTypes {
  action = 'action',
}

// Type of payloads of hotel actions
type tHotelPayload = {
  [tHotelActionTypes.action]: any;
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
