/* eslint-disable react-hooks/rules-of-hooks */
import { theme } from 'antd';
import { configResponsive, useResponsive } from 'ahooks';
const { useToken } = theme;

configResponsive({
    'xs': 0,
    'sm': 576,
    'md': 768,
    'lg': 992,
    'xl': 1200,
  });


export const useScreenSize=()=>{
    const responsive = useResponsive();
    return responsive;
   }

export const useTheme=()=>{
const { token } = useToken();
return token;
}
      