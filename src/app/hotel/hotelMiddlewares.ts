import { tHotelState } from './hotelTypes';
import validation from '../general/validation';

// Sort guests into economy and premium rooms
export const hotelSortGuests = (guests: number[], premiumLimitStart: number) => {
  // descending order
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
export const hotelOccupancyCalculation = (
  guests: tHotelState['guests'],
  occupancyFormParams: tHotelState['occupancyFormParams'],
  occupancyFormErrors: tHotelState['occupancyFormErrors'],
) => {
  // if validation error or missing value no new calculation
  if (
    !occupancyFormErrors.economyRooms &&
    !occupancyFormErrors.premiumRooms &&
    occupancyFormParams.economyRooms &&
    occupancyFormParams.premiumRooms
  ) {
    const ecomonyGuests = [...guests.economy];
    const freePremiumRooms = parseFloat(occupancyFormParams.premiumRooms);
    const freeEconomyRooms = parseFloat(occupancyFormParams.economyRooms);
    const upgradableEconomyGuests = ecomonyGuests.length - freeEconomyRooms;
    const occupancyResults: tHotelState['occupancyResults'] = {
      show: true,
      premiumRooms: 0,
      economyRooms: 0,
      premiumRoomIncome: 0,
      economyRoomIncome: 0,
      totalRoomIncome: 0,
    };

    // counting occupancy and income of premium rooms
    guests.premium.every((guest) => {
      // if free premium rooms are fully occupied or not available at all, exit from loop
      if (freePremiumRooms === occupancyResults.premiumRooms) {
        return false;
      }
      occupancyResults.premiumRooms++;
      occupancyResults.premiumRoomIncome += guest;
      return true;
    });

    // accomodate economy guests into premium rooms
    if (upgradableEconomyGuests > 0 && freePremiumRooms > occupancyResults.premiumRooms) {
      let upgradedEconomyGuests = 0;
      ecomonyGuests.every((guest) => {
        // if free premium rooms are fully occupied or all upgradable economy guests are upgraded, exit from loop
        if (
          freePremiumRooms === occupancyResults.premiumRooms ||
          upgradableEconomyGuests === upgradedEconomyGuests
        ) {
          return false;
        }
        upgradedEconomyGuests++;
        occupancyResults.premiumRooms++;
        occupancyResults.premiumRoomIncome += guest;
        return true;
      });
      // drop from the array those economy guests who were accomodated in premium rooms
      ecomonyGuests.splice(0, upgradedEconomyGuests);
    }

    // counting occupancy and income of economy rooms
    ecomonyGuests.every((guest) => {
      // if free economy rooms are fully occupied or not available at all, exit from loop
      if (freeEconomyRooms === occupancyResults.economyRooms) {
        return false;
      }
      occupancyResults.economyRooms++;
      occupancyResults.economyRoomIncome += guest;
      return true;
    });

    // counting total room income
    occupancyResults.totalRoomIncome =
      occupancyResults.premiumRoomIncome + occupancyResults.economyRoomIncome;

    return occupancyResults;
  }
  return false;
};
