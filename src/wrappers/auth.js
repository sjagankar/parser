import { Navigate, Outlet } from 'umi'
import { useAuth } from '@/utils/hooks';

export default (props) => {
  const { isLogin } = useAuth();
  if (isLogin) {
    return <Outlet />;
  } else{
    return <Navigate to="/login" />;
  }
}