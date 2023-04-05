import { useEffect } from 'react';
import { useAppContext } from '../core/Context';
import { tHotelActionTypes } from '../../app/hotel/hotelTypes';
import { settings } from '../../app/general/initialStates';
import { hotelInitialState } from '../../app/hotel/hotelInitialStates';
import { hotelOccupancyCalculation } from '../../app/hotel/hotelMiddlewares';
import DefaultLayout from '../layout/DefaultLayout';
import HotelOccupancyValidation from '../hotelOccupancy/HotelOccupancyValidation';
import HotelOccupanyForm from '../hotelOccupancy/HotelOccupanyForm';
import HotelOccupancyResults from '../hotelOccupancy/HotelOccupancyResults';
import ContentTitle from '../general/ContentTitle';

function HotelOccupancy() {
  const { hotelState, hotelDispatch } = useAppContext();

  useEffect(() => {
    document.title = 'Occupancy Calculation';
  }, []);

  // Call real time validations
  HotelOccupancyValidation();

  useEffect(() => {
    // to avoid recalculations if it is not necessary
    const timeOutId = setTimeout(() => {
      if (hotelState.status === 'validation') {
        // if form data changed set status to calculation
        hotelDispatch({
          type: tHotelActionTypes['hotelSetStatus'],
          payload: 'calculation',
        });
      } else if (hotelState.status === 'calculation') {
        // calculate only if calculation was requested
        const occupancy = hotelOccupancyCalculation(
          hotelState.guests,
          hotelState.occupancyFormParams,
          hotelState.occupancyFormErrors,
        );
        // dispatch calculated data or reset to initial state
        hotelDispatch({
          type: tHotelActionTypes['hotelSetOccupancy'],
          payload: occupancy ? occupancy : hotelInitialState.occupancyResults,
        });
      }
    }, settings['validationDelayMs']);
    return () => clearTimeout(timeOutId);
  }, [hotelState, hotelDispatch]);

  return (
    <DefaultLayout>
      <div className="md:py-[15px] py-[10px]">
        <ContentTitle
          mainTitle="Occupancy"
          subTitle="You can set the available number of rooms for the night."
        />
        <HotelOccupanyForm />
        <HotelOccupancyResults />
      </div>
    </DefaultLayout>
  );
}

export default HotelOccupancy;
