import {createAction} from '@reduxjs/toolkit';
import {InvalidTypeError} from 'errors/errors';

export const setPostsFilterSearchQuery = createAction('posts/setSearchQuery', (payload) => {
  if (typeof payload != 'string') {
    throw new InvalidTypeError(`payload: ${payload}`, 'string');
  }

  return {
    payload: payload,
  };
});
