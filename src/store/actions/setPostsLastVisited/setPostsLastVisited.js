import {createAction} from '@reduxjs/toolkit';
import {InvalidTypeError, NoDataError, ValidationError} from 'errors/errors';

export const setPostsLastVisited = createAction('posts/setLastVisited', (payload) => {
  if (!payload) {
    throw new NoDataError(`payload: ${payload}`);
  }

  if (typeof payload != 'number') {
    throw new InvalidTypeError(`payload: ${payload}`, 'number');
  }

  if (payload < 1) {
    throw new ValidationError(`payload: ${payload}`);
  }

  return {
    payload: payload,
  };
});
