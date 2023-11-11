import { Avatar, Dropdown, Menu } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useNavigate } from "umi";

const Profile = ({ profile }) => {
  let navigate = useNavigate();
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
    <Dropdown overlay={menu} placement="bottomRight">
      <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <Avatar icon={<UserOutlined />} />
        <span style={{ marginLeft: 8 }}>{profile.name}</span>
      </div>
    </Dropdown>
  );
};

export default Profile;
