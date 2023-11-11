import React, { useState, useEffect } from "react";
import { Button, Tabs, Row, Col, Space, Form, Input, Typography, Divider } from "antd";
import { useNavigate } from "umi";
import LoginForm from "../../components/FreeTrialForm/LoginForm";
import { fetchData } from "@/utils/hooks";
import { login } from "@/services/apis";

const Login = () => {
  const [isAppsumoUser, setIsAppsumoUser] = useState(false);
  useEffect(() => {
    // clear localStorage profile item if present
    localStorage.removeItem("profile");
    localStorage.removeItem("token");

    if (window.location.href.includes("appsumo")) {
      setIsAppsumoUser(true);
    }
  }, []);

  let navigate = useNavigate();
  const { data, loading, runAsync: runLogin } = fetchData(login, true, []);

const handleSubmit = async (values) => {
  try {
    const res = await runLogin(values);
    
    if (res) {
      // save res to localstorage
      localStorage.setItem("token", res.token);
      localStorage.setItem("profile", JSON.stringify(res));
      if (values.isAppsumoUser) {
        localStorage.setItem("showRedeem", true);
      }
      // check if token is set in localStorage before navigating
      if (localStorage.getItem("token")) {
        if (values.isAppsumoUser) {
          navigate("/settings");
        } else {
          navigate("/");
        }
      }
    }
  } catch (error) {
    // Handle any errors here
  }
};


  return (
    <div>
      <Typography.Title level={3}>Login</Typography.Title>
      <LoginForm handleSubmit={handleSubmit} />
      <Row type="flex" justify={"center"}>
        <Col span={24}>
          <Button loading={loading} block form="login" type="primary" htmlType="submit">
            Login
          </Button>
        </Col>

        <Divider>
          <Typography.Text type="secondary">OR</Typography.Text>{" "}
        </Divider>
        <Col span={24}>
          <Button
            type="default"
            block
            onClick={() =>
              isAppsumoUser
                ? navigate("/appsumo")
                : navigate("/register")
            }
          >
            Register
          </Button>
        </Col>
      </Row>
    </div>
  );
};
export default Login;
