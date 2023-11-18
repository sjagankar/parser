import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import {useNavigate} from 'umi';

const items = [
  {
    key: 'resumes',
    label: 'Try Parser',
    path: '/resumes',
  },
  {
    key: 'documentation',
    label: 'Documentation',
    path: '/documentation',
  },
  {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
  },
];


const GlobalHeader = () => {
  let navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    <div className="demo-logo" />
    <Menu onSelect={
      (item)=>{
        navigate(`/${item.key}`, { replace: true });
      }
    
    }  theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items} />
  </Header>
  );
};
export default GlobalHeader;