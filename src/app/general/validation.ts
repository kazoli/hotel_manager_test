import validator from 'validator';

const isPositiveInteger = (value: string) => {
  return !validator.isInt(value, { min: 0 });
};

const validation = {
  isPositiveInteger,
};
export default validation;
