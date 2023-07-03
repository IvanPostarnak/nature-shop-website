import axios from "axios"

export const fetchData = async (url, options) => {
  const cancelToken = axios.CancelToken.source();

  const response = axios.get(url, {
    cancelToken: cancelToken.token,
    params: options.params,
    method: "GET"
  })
  .then(res => res.data)
  .catch((err) => {
    if (axios.isCancel(err)) {
      console.log('request was canceled: ' + err.message);
      return 'canceled';
    } else {
      console.log('request error: ' + err.message);
      return 'error';
    }    
  })

  function cancel() {
    cancelToken.cancel()
  };

  return [response, cancel]
};