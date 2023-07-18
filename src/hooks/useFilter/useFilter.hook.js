import { useMemo } from "react";

export const useFilter = (data, filterCallback, deps) => {
  const filteredData = useMemo(() => {
    if (filterCallback) {
      return [...data].filter(filterCallback);
    } else {
      return data;
    }
  }, [data, ...deps]);
  
  return filteredData;
}