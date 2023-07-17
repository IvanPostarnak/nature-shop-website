import { useCallback, useEffect, useRef } from "react"

export const useTimeout = (initialCallback, delay=1000) => {
  const initialCallbackRef = useRef(initialCallback);
  const timeoutRef = useRef();

  const set = () => {
    timeoutRef.current = setTimeout(() => initialCallbackRef.current(), delay);
  };

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  const reset = useCallback(() => {
    clear();
    set();
  }, []);

  useEffect(() => {
    set();

    return () => clear();
  }, []);

  return {reset, clear};
}