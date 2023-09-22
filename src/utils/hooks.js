import { useRequest } from 'ahooks';

export function fetchData(apiFunction, manual = true, initialValue = []) {
    const {
      data,
      loading: fetchingData,
      run: fetchData,
      runAsync: fetchDataAsync,
    } = useRequest(apiFunction, {
      manual: manual,
      initialValue: [],
    });
  
    return { data, loading: fetchingData, run: fetchData, runAsync: fetchDataAsync };
  }