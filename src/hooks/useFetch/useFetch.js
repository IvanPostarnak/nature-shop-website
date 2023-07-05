import { useCallback, useEffect, useRef, useState } from "react"

export const useFetch = (callback) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const aborter = useRef();

  const sendRequest = () => {
    setIsLoading(true);

    const {response, cancel} = callback();
    aborter.current = cancel;

    response
    .then(res => {
      setData(res.data[0]);
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
    callback && sendRequest();

    return () => abort();
  }, []);

  return {isLoading, data, error, abort, reset};
}