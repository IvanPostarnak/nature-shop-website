import {createAction} from '@reduxjs/toolkit';
import {InvalidTypeError, NoDataError, ValidationError} from 'errors/errors';

export const setActivePost = createAction('posts/setActivePost', (payload) => {
  if (!payload) {
    throw new NoDataError(`payload: ${payload}`);
  }

  if (payload instanceof Function || payload instanceof Array || typeof payload != 'object') {
    throw new InvalidTypeError(`payload: ${payload}`, 'object');
  }

  if (!payload.post_id || !payload.title) {
    throw new ValidationError(`payload: ${payload}`);
  }

  return {
    payload: payload,
  };
});
