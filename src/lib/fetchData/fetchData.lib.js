import axios from 'axios';

export const fetchData = (url, options) => {
  const cancelToken = axios.CancelToken.source();

  const response = axios
    .get(url, {
      cancelToken: cancelToken.token,
      params: options.params,
      method: 'GET',
    })
    .catch((err) => {
      console.log('request error: ' + err.message);
    });

  function cancel() {
    cancelToken.cancel();
  }

  return {response, cancel};
};
