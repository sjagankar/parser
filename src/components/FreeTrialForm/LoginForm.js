import React, {useState, useEffect} from "react";
import { Form, Input, Button, Select } from "antd";

const LoginForm = (props) => {
  const { handleCancel, handleSubmit } = props;

  const [isAppsumoUser, setIsAppsumoUser] = useState(false);

  useEffect(() => {
    // check if current url contains appsumo
    if (window.location.href.includes("appsumo")) {
      setIsAppsumoUser(true);
    }
  }, []);


  const onFinish = (values) => {
    // console.log("Received values of form: ", values);
    handleSubmit({
      ...values,
      isAppsumoUser: isAppsumoUser ? 1 : 0,
    });
  };

  return (
    <Form name="login" onFinish={onFinish} layout="vertical">


      <Form.Item
        label="Email Address"
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name={"password"}
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

    </Form>
  );
};

export default LoginForm;
