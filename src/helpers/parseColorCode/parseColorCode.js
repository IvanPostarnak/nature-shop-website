import { InvalidTypeError, ValidationError } from "errors/errors";

// from '#abcdef' or '#a4f' => to string '255, 34, 78'
export const parseColorCode = (colorString) => {
  if (typeof colorString != 'string') {
    throw new InvalidTypeError(`'colorString' (${colorString})`, 'string');
  };
  if (colorString === '') {
    throw new ValidationError(`'colorString' (${colorString})`);
  };

  const clearString = colorString.replace(/#/gi, "");
  if (clearString.length != 3 && clearString.length != 6) {
    throw new ValidationError(`'colorString' (${colorString})`);
  };
  

  const flag = clearString.length === 3 ? true : false;

  const collorArray = [];

  collorArray[0] = flag ? clearString.slice(0, 1) : clearString.slice(0, 2);
  collorArray[1] = flag ? clearString.slice(1, 2) : clearString.slice(2, 4);
  collorArray[2] = flag ? clearString.slice(2, 3) : clearString.slice(4, 6);

  const result = collorArray.map(code => {
    return parseInt(flag ? code + code : code, 16);
  }).join(',');


  return result;
}