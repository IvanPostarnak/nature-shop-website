import { createAction } from "@reduxjs/toolkit";
import { InvalidTypeError } from "errors/errors";

export const setPostsFilterLanguageId = createAction("posts/setLanguageId", (payload) => {
  if (typeof payload != 'number') {
    throw new InvalidTypeError(`payload: ${payload}`, 'number');
  }

  return {
    payload: payload
  }
})