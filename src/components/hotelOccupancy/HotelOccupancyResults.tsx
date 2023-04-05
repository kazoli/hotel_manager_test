import { useAppContext } from '../core/Context';

function HotelOccupancyResults() {
  const { hotelState } = useAppContext();

  return (
    <section className="mt-[30px] p-[10px_15px] rounded-[5px] bg-[#f6f9fe] shadow-[inset_0_0_50px_0_#bed8f9,0_0_3px_0_#777] max-w-[500px]">
      {hotelState.occupancyResults.show ? (
        <>
          <section>
            <div className="hotel-occupancy-result-label">Data of rooms</div>
            <ul>
              <li>{`Available premium rooms: ${hotelState.occupancyFormParams.premiumRooms}`}</li>
              <li>{`Used premium rooms: ${hotelState.occupancyResults.premiumRooms}`}</li>
              <li>{`Available economy rooms: ${hotelState.occupancyFormParams.economyRooms}`}</li>
              <li>{`Used economy rooms: ${hotelState.occupancyResults.economyRooms}`}</li>
            </ul>
          </section>
          <section className="mt-[15px]">
            <div className="hotel-occupancy-result-label">Data of incomes</div>
            <ul>
              <li>{`Premium room income: ${hotelState.occupancyResults.premiumRoomIncome} EUR`}</li>
              <li>{`Economy room income: ${hotelState.occupancyResults.economyRoomIncome} EUR`}</li>
              <li>{`Total room income: ${hotelState.occupancyResults.totalRoomIncome} EUR`}</li>
            </ul>
          </section>
        </>
      ) : (
        <section className="font-[500] text-[1.1rem] text-[#505050]">
          {hotelState.status === 'validation' || hotelState.status === 'calculation'
            ? 'Please wait...'
            : 'Please enter valid room numbers to show results'}
        </section>
      )}
    </section>
  );
}

export default HotelOccupancyResults;
