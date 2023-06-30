export const init = (initArray) => {
  const initState = initArray.reduce((acc, item) => {
    if (!item.device) {
      throw new Error(`Each item of initArray should have a 'device' property`);
    }
    if (typeof item.device !== 'string') {
      throw new Error(`'device' property of initArray's items should be a string (at init.js)`);
    };
    return {
      ...acc,
      ['is' + item.device[0].toUpperCase() + item.device.slice(1)]: false
    };
  }, {});

  return initState;
};