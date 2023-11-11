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

  export function useAuth() {
    const token = localStorage.getItem('token');
    const showRedeem = localStorage.getItem('showRedeem');
    return {
      isLogin: token ? true : false,
      token,
      showRedeem,
      profile: JSON.parse(localStorage.getItem('profile')),
    };
  }