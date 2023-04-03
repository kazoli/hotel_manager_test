import validation from '../general/validation';

// Input validation
export const hotelValidateInput = (value: string) => {
  if (value.length) {
    const error = validation.isPositiveInteger(value);
    return error ? 'Only positive integer can be entered' : '';
  } else {
    return '';
  }
};
