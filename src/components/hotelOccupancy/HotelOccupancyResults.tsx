import { useAppContext } from '../core/Context';
import HotelOccupancResultBlock from './HotelOccupancResultBlock';

function HotelOccupancyResults() {
  const { hotelState } = useAppContext();
  const resultBlocks = [
    {
      title: 'Data of rooms',
      data: [
        `Available premium rooms: ${hotelState.occupancyFormParams.premiumRooms}`,
        `Used premium rooms: ${hotelState.occupancyResults.premiumRooms}`,
        `Available economy rooms: ${hotelState.occupancyFormParams.economyRooms}`,
        `Used economy rooms: ${hotelState.occupancyResults.economyRooms}`,
      ],
    },
    {
      title: 'Data of incomes',
      data: [
        `Premium room income: ${hotelState.occupancyResults.premiumRoomIncome} EUR`,
        `Economy room income: ${hotelState.occupancyResults.economyRoomIncome} EUR`,
        `Total room income: ${hotelState.occupancyResults.totalRoomIncome} EUR`,
      ],
    },
  ];

  return (
    <section className="mt-[30px] p-[10px_15px] rounded-[5px] bg-[#f6f9fe] shadow-[inset_0_0_50px_0_#bed8f9,0_0_3px_0_#777] max-w-[500px]">
      {hotelState.occupancyResults.show ? (
        resultBlocks.map((block, index) => (
          <HotelOccupancResultBlock key={index} title={block.title} data={block.data} />
        ))
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
