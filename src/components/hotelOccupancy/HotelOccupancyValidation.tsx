import { useEffect } from 'react';
import { tHotelActionTypes } from '../../app/hotel/hotelTypes';
import { settings } from '../../app/general/initialStates';
import { hotelValidateInput } from '../../app/hotel/hotelMiddlewares';
import { useAppContext } from '../core/Context';

function HotelOccupancyValidation() {
  const { hotelState, hotelDispatch } = useAppContext();

  // Validate premium rooms
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      const errorMessage = hotelValidateInput(hotelState.occupancyFormParams.premiumRooms);
      hotelDispatch({
        type: tHotelActionTypes['hotelSetOccupancyErrors'],
        payload: { param: 'premiumRooms', value: errorMessage },
      });
    }, settings['validationDelayMs']);
    return () => clearTimeout(timeOutId);
  }, [hotelState.occupancyFormParams.premiumRooms, hotelDispatch]);

  // Validate economy rooms
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      const errorMessage = hotelValidateInput(hotelState.occupancyFormParams.economyRooms);
      hotelDispatch({
        type: tHotelActionTypes['hotelSetOccupancyErrors'],
        payload: { param: 'economyRooms', value: errorMessage },
      });
    }, settings['validationDelayMs']);
    return () => clearTimeout(timeOutId);
  }, [hotelState.occupancyFormParams.economyRooms, hotelDispatch]);
}

export default HotelOccupancyValidation;
