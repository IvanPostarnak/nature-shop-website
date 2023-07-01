export const reducer = (state, action) => {

  if (!action.payload) {
    throw new NoDataError('action.payload property');
  };

  if (action.payload instanceof Array !== true) {
    throw new InvalidTypeError('action.payload', 'Array');
  };

  if (Object.keys(state).length != action.payload.length) {
    throw new CompareError('state.length', 'action.payload.length')
  };

  if (typeof action.type !== 'string') {
    throw new InvalidTypeError('action.type', 'string');
  };

  let newState = {};

  switch (action.type) {
    case 'device_changed':
      Object.keys(state).forEach((key, index) => {
        newState[key] = action.payload[index];
      });
      return newState;
  };
  
  
  throw new UnknownDataError('action.type');
};