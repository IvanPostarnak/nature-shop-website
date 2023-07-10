import { setInitialValue } from "helpers/setInitialValue/setInitialValue";
import { useCallback, useState } from "react"

export const useInput = (initialValue) => {
  const [value, setValue] = useState(() => setInitialValue(initialValue));

  const onInput = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  return {value, onInput};
}