import { useFetch } from "hooks/useFetch/useFetch.hook"
import { useTimeout } from "hooks/useTimeout/useTimeout.hook";
import { useUpdateEffect } from "hooks/useUpdateEffect/useUpdateEffect.hook";
import { useEffect } from "react";

export const useDebounce = (initialCallback, options) => {
  const fetchObj = useFetch(() => initialCallback(), {
    expect: "array",
    deps: options?.deps
  });

  const {reset: resetTimeout, clear} = useTimeout(fetchObj.reset, options?.delay);

  useEffect(() => {
    clear();
  }, []);

  useUpdateEffect(() => {
    fetchObj.abort();
    resetTimeout();
  }, options?.deps);

  return {...fetchObj};
}