import React, { useState, useEffect } from "react";
import { Button, Tabs, Row, Col, Space, Form, Input, Typography, Divider } from "antd";
import { useNavigate } from "umi";
import { fetchData } from "@/utils/hooks";
import { resetPassword } from "@/services/apis";

const Login = () => {
  const [isAppsumoUser, setIsAppsumoUser] = useState(false);
  const [loginError, setLoginError] = useState(false);
    const [resetSuccess, setResetSuccess] = useState(false);
  useEffect(() => {
    // clear localStorage profile item if present
    localStorage.removeItem("profile");
    localStorage.removeItem("token");

    if (window.location.href.includes("appsumo")) {
      setIsAppsumoUser(true);
    }
  }, []);

  let navigate = useNavigate();
  const { data, loading, runAsync: runResetPassword } = fetchData(resetPassword, true, []);

const handleSubmit = async (values) => {
  try {
    const res = await runResetPassword(values);
    
    if (res.status !=='error') {
      setLoginError(false);
     setResetSuccess(true);
    }else{
      setLoginError(true);
      setResetSuccess(false);
    }
  } catch (error) {
    // Handle any errors here
  }
};


  return (
    <div>
      <Typography.Title level={3}>Forgot Password ? </Typography.Title>
       <Form id="forgotpassword" onFinish={handleSubmit}>
      <Row type="flex" justify={"center"}>
        <Col span={24}>
            <Form.Item
                name="email"
                type="email"
                label="Registered email address"
                tooltip="We will send you password reset information on your registered email"
                rules={[
                    {
                    required: true,
                    message: "Please input your email!",
                    },
                ]}
                >
                <Input placeholder="Email" />
            </Form.Item>
        </Col>


      <Col span={24}>
          <Button loading={loading} block form="forgotpassword" type="primary" htmlType="submit">
            Submit
          </Button>
        </Col>        
        {loginError && (
          <Col span={24}>
            <Typography.Text type="danger">
              Please enter a registered email address
            </Typography.Text>
          </Col>
        )}  

        {resetSuccess && (
          <Col span={24}>
            <Typography.Text type="success">
            Password reseted for your account. Please check your email for further instructions.
            </Typography.Text>
          </Col>
        )}
        <Divider>
          <Typography.Text type="secondary">OR</Typography.Text>{" "}
        </Divider>
        <Col span={24}>
          <Button
            type="default"
            block
            onClick={() => navigate("/login") }
          >
            Login
          </Button>
        </Col>
        
      </Row>
        </Form>
    </div>
  );
};
export default Login;
