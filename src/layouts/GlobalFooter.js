import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const GlobalFooter = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        {/* CVViZ ©2023 */}
      </Footer>
  );
};
export default GlobalFooter;