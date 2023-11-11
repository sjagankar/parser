import React, { useState } from "react";
import { Modal, Button, Space } from "antd";
import FreeTrialForm from "./index";
import LoginForm from "./LoginForm";
import {useNavigate} from "umi";

const FreeTrialModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  let navigate = useNavigate();


  const showModal = () => {
    console.log("show modal");
    navigate("/register", { replace: true });
    // setIsModalVisible(true);
  };

  const handleSubmit = (values) => {
    console.log("handle ok", values);
    setIsModalVisible(false);
  };

  const handleSubmitLogin = (values) => {
    console.log("handle ok", values);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    console.log("handle cancel");
    setIsModalVisible(false);
  };

  const handleLogin = () => {
    console.log("handle login");

    navigate("/login", { replace: true });
    // setIsLoginVisible(true);
  }

  const handleLoginCancel = () => {
    console.log("handle login cancel");
    setIsLoginVisible(false);
  }


  return (
    <div>
      <Modal
        title="Sign Up For Free Trial"
        onCancel={handleCancel}
        open={isModalVisible}
        okText="Start Free Trial"
        okButtonProps={{
          form: "free_trial",
          htmlType: "submit",
        }}
        destroyOnClose
      >
        <FreeTrialForm handleCancel={handleCancel} handleSubmit={handleSubmit} />
      </Modal>

      <Modal
        title="Log In"
        onCancel={handleLoginCancel}
        open={isLoginVisible}
        okText="Login"
        okButtonProps={{
          form: "login",
          htmlType: "submit",
        }}
        destroyOnClose
      >
        <LoginForm handleCancel={handleLoginCancel} handleSubmit={handleSubmitLogin} />
      </Modal>

      <Space>
        <Button onClick={handleLogin}>Log In</Button>
        <Button type="primary" onClick={showModal}>
          Start Free Trial
        </Button>
      </Space>
    </div>
  );
};

export default FreeTrialModal;
