import {createAction} from '@reduxjs/toolkit';
import {InvalidTypeError, ValidationError} from 'errors/errors';

export const setDevice = createAction('device/setDevice', (payload) => {
  if (payload instanceof Object === false) {
    throw new InvalidTypeError('setDevice(): payload', 'object');
  }

  let hasOnlyOneTrue = false;

  for (let key in payload) {
    // check that each property has boolean type
    if (typeof payload[key] != 'boolean') {
      throw new InvalidTypeError('setDevice(): payload');
    }

    // check, that there is only one property=true in payload
    if (payload[key] === true) {
      if (!hasOnlyOneTrue) {
        hasOnlyOneTrue = true;
      } else {
        throw new ValidationError('setDevice(): payload');
      }
    }
  }

  // there are 0 truths - error
  if (hasOnlyOneTrue === false) {
    throw new ValidationError('setDevice(): payload');
  }

  return {
    payload: payload,
  };
});
