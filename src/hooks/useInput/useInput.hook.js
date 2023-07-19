import {useCallback, useState} from 'react';
import {setInitialValue} from 'helpers/helpers';

export const useInput = (initialValue) => {
  const [value, setValue] = useState(() => setInitialValue(initialValue));

  const onInput = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  return {value, onInput};
};
