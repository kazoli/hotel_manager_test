import { useEffect } from 'react';
import { useAppContext } from '../core/Context';
import { tHotelActionTypes } from '../../app/hotel/hotelTypes';
import { settings } from '../../app/general/initialStates';
import { hotelInitialState } from '../../app/hotel/hotelInitialStates';
import { hotelOccupancyCalculation } from '../../app/hotel/hotelMiddlewares';
import DefaultLayout from '../layout/DefaultLayout';
import HotelOccupancyValidation from '../hotelOccupancy/HotelOccupancyValidation';
import Input from '../form/Input';

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
        // TODO unecessary
        // if calculation requested set status to idle
        // hotelDispatch({
        //   type: tHotelActionTypes['hotelSetStatus'],
        //   payload: 'idle',
        // });
        // calculate only if calculation was requested
        const occupancy = hotelOccupancyCalculation(hotelState);
        // dispatch calculated data or reset to initial state
        hotelDispatch({
          type: tHotelActionTypes['hotelSetOccupancy'],
          payload: occupancy ? occupancy : hotelInitialState.occupancy,
        });
      }
    }, settings['validationDelayMs']);
    return () => clearTimeout(timeOutId);
  }, [hotelState, hotelDispatch]);

  return (
    <DefaultLayout>
      <div className="md:py-[15px] py-[10px]">
        <section>
          <h1 className="leading-[2rem] text-[2rem] text-[#4d7fb3] font-[400]">
            Occupancy calculation
          </h1>
          <h3 className="leading-[1.5rem] text-[1.2rem] mt-[3px] text-[#505050] font-[100]">
            You can set the available number of rooms for the night.
          </h3>
        </section>
        <section className="mt-[30px]">
          <Input
            type="text"
            label="Number of premium rooms"
            id="premium-rooms"
            placeholder="Enter a positive integer number"
            value={hotelState.occupancyFormParams.premiumRooms}
            action={(value) =>
              hotelDispatch({
                type: tHotelActionTypes['hotelSetOccupancyParams'],
                payload: { param: 'premiumRooms', value: value },
              })
            }
            error={hotelState.occupancyFormErrors.premiumRooms}
          />
          <Input
            type="text"
            label="Number of economy rooms"
            id="economy-rooms"
            placeholder="Enter a positive integer number"
            value={hotelState.occupancyFormParams.economyRooms}
            action={(value) =>
              hotelDispatch({
                type: tHotelActionTypes['hotelSetOccupancyParams'],
                payload: { param: 'economyRooms', value: value },
              })
            }
            error={hotelState.occupancyFormErrors.economyRooms}
          />
          <div className="mt-[15px]">
            <span
              className="text-[#0000ff] hover:underline cursor-pointer"
              onClick={() =>
                hotelDispatch({
                  type: tHotelActionTypes['hotelResetOccupancyForm'],
                })
              }
            >
              Reset form
            </span>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}

export default HotelOccupancy;
