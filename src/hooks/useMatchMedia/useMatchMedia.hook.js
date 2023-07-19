import {useLayoutEffect, useReducer} from 'react';
import {defineDevice} from './config/defineDevice.config';
import {reducer} from './helpers/reducer';
import {init} from './helpers/init';

export const useMatchMedia = () => {
  const [device, dispatch] = useReducer(reducer, defineDevice, init);

  const mediaQueryLists = defineDevice.map((item) => {
    return window.matchMedia(item.mediaQuery);
  });

  const getValues = () => {
    return mediaQueryLists.map((list) => list.matches);
  };

  useLayoutEffect(() => {
    const renewValues = () => {
      dispatch({
        type: 'device_changed',
        payload: getValues(),
      });
    };

    renewValues();

    mediaQueryLists.forEach((list) => {
      list.addEventListener('change', renewValues);
    });

    return () => {
      mediaQueryLists.forEach((list) => {
        list.removeEventListener('change', renewValues);
      });
    };
  }, []);

  return device;
};
