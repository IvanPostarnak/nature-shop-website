import {createAction} from '@reduxjs/toolkit';
import {InvalidTypeError, NoDataError, ValidationError} from 'errors/errors';

export const setActivePage = createAction('pages/setActivePage', (payload) => {
  if (!payload) {
    throw new NoDataError('setActivePage(): payload');
  }

  if (typeof payload != 'string') {
    throw new InvalidTypeError('setActivePage(): payload', 'string');
  }

  if (payload === '') {
    throw new ValidationError('setActivePage(): payload');
  }

  return {
    payload: `${payload[0].toUpperCase() + payload.slice(1)}`,
  };
});
