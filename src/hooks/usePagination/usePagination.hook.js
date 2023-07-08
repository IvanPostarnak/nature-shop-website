import { useFetch } from "hooks/hooks";
import { useState, useEffect } from "react";

export const usePagination = (initialCallback, options) => {
  const [start, setStart] = useState(() => options?.start || 0);
  const [step, setStep] = useState(() => options?.step || 10);

  const fetchObj = useFetch(() => initialCallback(start, step), {
    expect: "array",
    deps: [start, step]
  });

  useEffect(() => {
    fetchObj.reset();
  }, [start, step]);

  return {start, step, setStart, setStep, ...fetchObj}
}