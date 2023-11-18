import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { Outlet, matchRoutes, useParams } from "umi";
import GlobalHeader from '@/components/GlobalHeader';
import GlobalFooter from './GlobalFooter';
import styles from "./index.less";


const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <GlobalHeader/>
      <Content
        style={{
          padding: '0 50px',
          marginTop: '24px',
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Outlet />
      </Content>
      <GlobalFooter/>
    </Layout>
  );
};
export default App;