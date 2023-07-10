import { prepareData } from "helpers/prepareData/prepareData";
import { useCallback, useEffect, useRef, useState } from "react"

export const useFetch = (initialCallback, options) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [headers, setHeaders] = useState(null);
  const [error, setError] = useState(null);

  const callback = useRef(initialCallback);
  const aborter = useRef();

  const sendRequest = () => {
    setIsLoading(true);

    const {response, cancel} = callback.current();
    aborter.current = cancel;

    response
    .then(res => {
      setData(prepareData(res.data, options?.expect));
      setHeaders(res.headers);
      setIsLoading(false);
    })
    .catch(err => {
      setError(err);
      setIsLoading(false);
    });
  };
  
  const abort = useCallback(() => {
    aborter.current && aborter.current();
  }, []);

  const reset = useCallback(() => {
    abort();
    sendRequest();
  }, []);

  useEffect(() => {
    callback.current = initialCallback;
    callback.current && sendRequest();

    return () => abort();
  }, options?.deps || []);

  return {isLoading, data, headers, error, abort, reset};
}