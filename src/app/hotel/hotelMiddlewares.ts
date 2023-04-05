import { tHotelState } from './hotelTypes';
import validation from '../general/validation';

// Sort guests into economy and premium rooms
export const hotelSortGuests = (guests: number[], premiumLimitStart: number) => {
  guests.sort((a, b) => b - a);
  const guestLists: tHotelState['guests'] = { economy: [], premium: [] };
  guests.forEach((guest) => {
    if (guest < premiumLimitStart) {
      guestLists.economy = [...guestLists.economy, guest];
    } else {
      guestLists.premium = [...guestLists.premium, guest];
    }
  });
  return guestLists;
};

// Input validation
export const hotelValidateInput = (value: string) => {
  if (value.length) {
    const error = validation.isPositiveInteger(value);
    return error ? 'Only positive integer can be entered' : '';
  } else {
    return '';
  }
};

// Hotel occupancy calculations
export const hotelOccupancyCalculation = (hotelState: tHotelState) => {
  // if validation error or missing value no new calculation
  if (
    !hotelState.occupancyFormErrors.economyRooms &&
    !hotelState.occupancyFormErrors.premiumRooms &&
    hotelState.occupancyFormParams.economyRooms &&
    hotelState.occupancyFormParams.premiumRooms
  ) {
    console.log(hotelState); // TODO
    const ecomonyGuests = [...hotelState.guests.economy];
    const freePremiumRooms = parseFloat(hotelState.occupancyFormParams.premiumRooms);
    const freeEconomyRooms = parseFloat(hotelState.occupancyFormParams.economyRooms);
    const occupancy: tHotelState['occupancy'] = {
      premiumRooms: 0,
      economyRooms: 0,
      premiumRoomIncome: 0,
      economyRoomIncome: 0,
      totalRoomIncome: 0,
    };

    // counting occupancy and income of premium rooms
    hotelState.guests.premium.every((guest) => {
      // if free premium rooms are fully occupied or not available at all, exit from loop
      if (freePremiumRooms === occupancy.premiumRooms) {
        return false;
      }
      occupancy.premiumRooms++;
      occupancy.premiumRoomIncome += guest;
      return true;
    });

    console.log('freePremiumRooms', freePremiumRooms); //TODO

    // TODO check out guest number of economy bigger than free room number
    // TODO push highest paying economy quests who are over the free economy rooms but can be accomodated in premium rooms

    // counting occupancy and income of economy rooms
    ecomonyGuests.every((guest) => {
      // if free economy rooms are fully occupied or not available at all, exit from loop
      if (freeEconomyRooms === occupancy.economyRooms) {
        return false;
      }
      occupancy.economyRooms++;
      occupancy.economyRoomIncome += guest;
      return true;
    });

    // counting total room income
    occupancy.totalRoomIncome = occupancy.premiumRoomIncome + occupancy.economyRoomIncome;
    console.log(occupancy); //TODO

    return occupancy;
  }
  return false;
};
