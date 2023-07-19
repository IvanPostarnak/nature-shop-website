import {useCallback, useState} from 'react';
import {setInitialValue} from 'helpers/helpers';

export const useToggle = (initialValue) => {
  const [value, setValue] = useState(() => {
    return Boolean(setInitialValue(initialValue));
  });

  const toggleValue = useCallback((value) => {
    setValue((prev) => (value ? Boolean(value) : !prev));
  }, []);

  return {value, toggleValue};
};
