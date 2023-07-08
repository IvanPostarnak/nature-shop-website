import { useFetch } from "hooks/hooks";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPostsStart, setPostsStep } from "store/actions";
import { getPostsStart, getPostsStep } from "store/selectors";

export const usePagination = (initialCallback, options) => {
  const savedStart = useSelector(getPostsStart);
  const savedStep = useSelector(getPostsStep);
  const dispatch = useDispatch();

  const [start, setStart] = useState(() => options?.start || savedStart || 0);
  const [step, setStep] = useState(() => options?.step || savedStep || 10);

  const fetchObj = useFetch(() => initialCallback(start, step), {
    expect: "array",
    deps: [start, step]
  });

  useEffect(() => {
    dispatch(setPostsStart(start));
    dispatch(setPostsStep(step));
    fetchObj.reset();
  }, [start, step]);

  return {start, step, setStart, setStep, ...fetchObj}
}