export const reducer = (state, action) => {
  if (action.payload instanceof Array !== true) {
    throw new Error('action should have \'payload\' propery equals to an array[] (at reducer)');
  };
  if (Object.keys(state).length != action.payload.length) {
    throw new Error('state object and action.payload have to have the same length (at reducer)');
  };
  if (typeof action.type !== 'string') {
    throw new Error('action.type have to be a string at reducer function of useMatchMedia()');
  };

  let newState = {};

  switch (action.type) {
    case 'device_changed':
      Object.keys(state).forEach((key, index) => {
        newState[key] = action.payload[index];
      });
      return newState;
  };
  
  throw new Error(`Unknown action at 'reducer' of 'useMatchMedia() hook`);
};