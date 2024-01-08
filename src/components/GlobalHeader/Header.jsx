import React, { useContext, useState } from "react";
import { inIframe, addHttps, isEmpty } from "@/utils/utils";
import LayoutWrapper from "@/components/LayoutWrapper";
import { useTheme } from "@/utils/theme";
import logo from "@/assets/logo.png";
import { Button, Flex, Space, Layout, Menu } from "antd";
import FreeTrialModal from "../FreeTrialForm/FreeTrialModal";
import Profile from "./Profile";
import { useNavigate, useLocation } from "umi";
import { useAuth } from "@/utils/hooks";
const { Header } = Layout;

// import Settings icon from ant design icons
import { SettingOutlined } from "@ant-design/icons";

const headerStyle = {
  // backgroundColor: '#dee0e3',
  backgroundColor: "#fff",
  padding: "6px 36px",
  marginBottom: 24,
};

const GlobalHeader = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const pathValue = location.pathname.split("/")[1];
  const theme = useTheme();
  const { isLogin, profile } = useAuth();

  const items = [
    {
      key: "try",
      label: "Try Parser",
      path: "/try",
    },
  ];

  if (isLogin) {
    items.push({
      key: "documentation",
      label: "Documentation",
      path: "/documentation",
    });
  }

  const headerSection = (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <img src={logo} alt="Logo" style={{ height: "36px", marginRight:24}} />
      <Menu
        onSelect={(item) => {
          navigate(`/${item.key}`, { replace: true });
        }}
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[pathValue]}
        activeKey={[pathValue]}
        items={items}
        style={{
          width: 500
        }}
      />

      <div style={{ flex: 1 }}></div>
      {isLogin ? <Profile profile /> : <FreeTrialModal />}
    </Header>
  );

  return !inIframe() ? headerSection : <></>;
};

export default LayoutWrapper(GlobalHeader);
