import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPostsStart, setPostsStep, setPostsLastActivePage } from "store/actions";
import { getPostsStart, getPostsStep } from "store/selectors";

export const usePagination = (array, options) => {
  const savedStart = useSelector(getPostsStart);
  const savedStep = useSelector(getPostsStep);
  const dispatch = useDispatch();

  const [start, setStart] = useState(() => options?.start || savedStart || 0);
  const [step, setStep] = useState(() => options?.step || savedStep || 10);
  const [singlePageData, setSinglePageData] = useState(() => array);

  useEffect(() => {
    dispatch(setPostsStep(step));
  }, [step]);

  useEffect(() => {
    dispatch(setPostsStart(start));
  }, [start]);

  useEffect(() => {
    if (!array) {
      return;
    }
    setSinglePageData(array.filter((item, index) => {
      return index >= start && index < start + step
    }));
  }, [array, start, step]);

  const onChangePage = useCallback((pageId, newStart) => {
    dispatch(setPostsLastActivePage(pageId));
    setStart(newStart);
  }, []);

  return {start, step, onChangePage, singlePageData}
}