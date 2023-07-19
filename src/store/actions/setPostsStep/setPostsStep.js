import {createAction} from '@reduxjs/toolkit';
import {InvalidTypeError, NoDataError, ValidationError} from 'errors/errors';

export const setPostsStep = createAction('posts/setStep', (payload) => {
  if (payload == undefined) {
    throw new NoDataError(`payload: ${payload}`);
  }

  if (typeof payload != 'number') {
    throw new InvalidTypeError(`payload: ${payload}`, number);
  }

  if (payload <= 0) {
    throw new ValidationError(`payload: ${payload}`);
  }

  return {
    payload: payload,
  };
});
