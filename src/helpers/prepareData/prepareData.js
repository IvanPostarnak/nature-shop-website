import { InvalidTypeError, UnknownDataError } from "errors/errors";

export const prepareData = (data, expect="object") => {

  switch(expect) {

    case 'object':

      if (data instanceof Array) {
        if (data[0] instanceof Object) {
          return data[0];
        } else {
          throw new InvalidTypeError(`data[0]: ${data[0]}`, "object")
        }
    
      } else if (data instanceof Function) {
        throw new InvalidTypeError(`data: ${data}`, "object");

      } else if (data instanceof Object) {
        return data;
    
      } else {
        throw new InvalidTypeError(`data: ${data}`, "object");

      }

    case 'array':

      if (data instanceof Array) {
        return data;

      } else {
        throw new InvalidTypeError(`data: ${data}`, "array");

      }
    
    default:

      throw new UnknownDataError(`expect: ${expect}`)
  }
}