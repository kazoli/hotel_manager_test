import { tHotelActionTypes } from '../../app/hotel/hotelTypes';
import { useAppContext } from '../core/Context';
import Input from '../form/Input';

function HotelOccupanyForm() {
  const { hotelState, hotelDispatch } = useAppContext();

  return (
    <section className="mt-[30px]">
      <Input
        type="text"
        label="Number of premium rooms"
        id="premium-rooms"
        placeholder="Enter a positive integer number"
        value={hotelState.occupancyFormParams.premiumRooms}
        action={(value) =>
          hotelDispatch({
            type: tHotelActionTypes['hotelSetOccupancyFormParams'],
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
            type: tHotelActionTypes['hotelSetOccupancyFormParams'],
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
  );
}

export default HotelOccupanyForm;
