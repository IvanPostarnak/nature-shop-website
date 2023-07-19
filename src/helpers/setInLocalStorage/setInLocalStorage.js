import {InvalidTypeError, NoDataError, ValidationError} from 'errors/errors';

export const setInLocalStorage = (key, value) => {
  if (!value) {
    throw new NoDataError(`value: ${value}`);
  }

  if (typeof key != 'string') {
    throw new InvalidTypeError(`key: ${key}`, 'string');
  }

  if (key === '') {
    throw new ValidationError(`key: ${key}`);
  }

  localStorage.setItem(key, JSON.stringify(value));

  return true;
};
