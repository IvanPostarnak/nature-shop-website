import {InvalidTypeError, ValidationError} from 'errors/errors';

export const getFromLocalStorage = (key) => {
  if (typeof key != 'string') {
    throw new InvalidTypeError(`key: ${key}`, 'string');
  }

  if (key === '') {
    throw new ValidationError(`key: ${key}`);
  }

  const response = localStorage.getItem(key);

  return response ? JSON.parse(response) : response;
};
