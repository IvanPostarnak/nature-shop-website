import { useEffect, useRef } from "react"

export const useUpdateEffect = (callback, deps) => {
  const isMountStage = useRef(true);

  useEffect(() => {
    if (isMountStage.current) {
      isMountStage.current = false;
      return;
    }
    return callback();
  }, deps);
}