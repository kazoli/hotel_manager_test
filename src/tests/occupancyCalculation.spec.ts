import guests from '../app/hotel/guests.json';
import { hotelPremiumLimitStart } from '../app/hotel/hotelInitialStates';
import { hotelOccupancyCalculation, hotelSortGuests } from '../app/hotel/hotelMiddlewares';

const sortedGuests = hotelSortGuests(guests, hotelPremiumLimitStart);
const occupancyFormErrors = {
  premiumRooms: '',
  economyRooms: '',
};

describe('occupancy calculations', () => {
  it('TEST 1 # Available Premium rooms: 3 Available Economy rooms: 3 Usage Premium: 3 (EUR 738) Usage Economy: 3 (EUR 167)', () => {
    const occupancyFormParams = {
      premiumRooms: '3',
      economyRooms: '3',
    };
    const calculation = hotelOccupancyCalculation(
      sortedGuests,
      occupancyFormParams,
      occupancyFormErrors,
    );
    const occupancyResults = {
      show: true,
      premiumRooms: 3,
      economyRooms: 3,
      premiumRoomIncome: 738,
      economyRoomIncome: 167,
      totalRoomIncome: 905,
    };

    expect(calculation).toEqual(occupancyResults);
  });

  it('TEST 2 # Available Premium rooms: 7 Available Economy rooms: 5 Usage Premium: 6 (EUR 1054) Usage Economy: 4 (EUR 189)', () => {
    const occupancyFormParams = {
      premiumRooms: '7',
      economyRooms: '5',
    };
    const calculation = hotelOccupancyCalculation(
      sortedGuests,
      occupancyFormParams,
      occupancyFormErrors,
    );
    const occupancyResults = {
      show: true,
      premiumRooms: 6,
      economyRooms: 4,
      premiumRoomIncome: 1054,
      economyRoomIncome: 189,
      totalRoomIncome: 1243,
    };

    expect(calculation).toEqual(occupancyResults);
  });

  it('TEST 3 # Available Premium rooms: 2 Available Economy rooms: 7 Usage Premium: 2 (EUR 583) Usage Economy: 4 (EUR 189)', () => {
    const occupancyFormParams = {
      premiumRooms: '2',
      economyRooms: '7',
    };
    const calculation = hotelOccupancyCalculation(
      sortedGuests,
      occupancyFormParams,
      occupancyFormErrors,
    );
    const occupancyResults = {
      show: true,
      premiumRooms: 2,
      economyRooms: 4,
      premiumRoomIncome: 583,
      economyRoomIncome: 189,
      totalRoomIncome: 772,
    };

    expect(calculation).toEqual(occupancyResults);
  });

  it('TEST 4 # Available Premium rooms: 7 Available Economy rooms: 1 Usage Premium: 7 (EUR 1153) Usage Economy: 1 (EUR 45)', () => {
    const occupancyFormParams = {
      premiumRooms: '7',
      economyRooms: '1',
    };
    const calculation = hotelOccupancyCalculation(
      sortedGuests,
      occupancyFormParams,
      occupancyFormErrors,
    );
    const occupancyResults = {
      show: true,
      premiumRooms: 7,
      economyRooms: 1,
      premiumRoomIncome: 1153,
      economyRoomIncome: 45,
      totalRoomIncome: 1198,
    };

    expect(calculation).toEqual(occupancyResults);
  });

  it('TEST 5 # Available Premium rooms: 10 Available Economy rooms: 3 Usage Premium: 7 (EUR 1153) Usage Economy: 3 (EUR 90)', () => {
    const occupancyFormParams = {
      premiumRooms: '10',
      economyRooms: '3',
    };
    const calculation = hotelOccupancyCalculation(
      sortedGuests,
      occupancyFormParams,
      occupancyFormErrors,
    );
    const occupancyResults = {
      show: true,
      premiumRooms: 7,
      economyRooms: 3,
      premiumRoomIncome: 1153,
      economyRoomIncome: 90,
      totalRoomIncome: 1243,
    };

    expect(calculation).toEqual(occupancyResults);
  });
});
