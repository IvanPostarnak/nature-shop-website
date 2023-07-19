import {ValidationError} from 'errors/errors';

// expected string in format YYYY-MM-DDTHH:mm:ss.mmmZ
export const getTimeAgo = (dateAndTimeString, nowStringOrTimestamp) => {
  const SEPARATOR = 'T';
  const THE_END = '.';

  const indexOfSeparator = dateAndTimeString.indexOf(SEPARATOR);
  if (indexOfSeparator === -1) {
    throw new ValidationError('T');
  }

  const indexOfTheEnd = dateAndTimeString.indexOf(THE_END);
  if (indexOfTheEnd === -1) {
    throw new ValidationError('.');
  }

  const previosMoment = new Date(dateAndTimeString);
  const presentMoment = nowStringOrTimestamp ? new Date(nowStringOrTimestamp) : new Date();

  const difference = new Date(presentMoment - previosMoment);
  const differenceObject = {
    year: difference.getUTCFullYear() - 1970,
    month: difference.getUTCMonth(),
    day: difference.getUTCDate() - 1,
    hour: difference.getUTCHours(),
    minute: difference.getUTCMinutes(),
    second: difference.getUTCSeconds(),
  };

  for (let key in differenceObject) {
    const value = differenceObject[key];
    if (value) {
      return `${value} ${value === 1 ? key : key + 's'} ago`;
    }
  }

  return 'Just now';
};
