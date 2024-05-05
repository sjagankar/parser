import React, { useState } from "react";
import { Avatar, Dropdown, Menu, Modal } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { useNavigate } from "umi";
import ChangePassword from "@/components/ChangePassword";

const Profile = ({ profile }) => {
  const [visible, setVisible] = useState(false);
  let navigate = useNavigate();


  const handleSubmit = (values) => {
    console.log("values", values);
    // const res =  runResetPassword(values);
  //   if (res.status !== "error") {
  //     setPasswordResetSuccess(true);
  //     setPasswordResetError(false);
  //     setPasswordResetMessage(res.message);
  //     setPasswordReset(true);
  //   } else {
  //     setPasswordResetSuccess(false);
  //     setPasswordResetError(true);
  //     setPasswordResetMessage(res.message);
  //     setPasswordReset(true);
  // };
};



  const menu = (
    <Menu>
      <Menu.Item
        key="settings"
        icon={<SettingOutlined />}
        onClick={() => {
          // check if current url contains "resumes"
          // if yes, then navigate to /settings
          // else navigate to /settings
          const currentUrl = window.location.pathname;
          if (currentUrl.includes("resumes")) {
            // open in new tab
            window.open("/settings", "_blank");
          } else {
            navigate("/settings", { replace: true });
          }
        }}
      >
        Settings
      </Menu.Item>
      <Menu.Item
        key="change_password"
        icon={<LockOutlined />}
        onClick={() => setVisible(true)}
      >
        Change Password
      </Menu.Item>
      <Menu.Item
        key="logout"
        icon={<LogoutOutlined />}
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("profile");
          navigate("/login", { replace: true });
        }}
      >
        Logout
      </Menu.Item>
    </Menu>
  );


  return (
    <span>
    <Dropdown overlay={menu} placement="bottomRight">
      <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <Avatar icon={<UserOutlined />} />
        <span style={{ marginLeft: 8 }}>{profile.name}</span>
      </div>
    </Dropdown>

    <Modal destroyOnClose footer={null} open={visible} onCancel={() => setVisible(false)}>
      <ChangePassword />
    </Modal>

    </span>
  );
};

export default Profile;
