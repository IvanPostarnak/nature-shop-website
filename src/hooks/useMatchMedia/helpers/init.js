import { InvalidTypeError, NoDataError } from "errors/errors";

export const init = (initArray) => {

  const initState = initArray.reduce((acc, item) => {

    if (!item.device) {
      throw new NoDataError('initArray[i].device property');
    };

    if (typeof item.device !== 'string') {
      throw new InvalidTypeError('item.device', 'string');
    };

    return {
      ...acc,
      ['is' + item.device[0].toUpperCase() + item.device.slice(1)]: item?.default ? true : false
    };

  }, {});

  return initState;
};