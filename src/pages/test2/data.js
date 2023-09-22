import { Col, Button, Form, Input, Checkbox, Select, Typography } from "antd";
const { Password } = Input;
const { Text } = Typography;

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

export const form = {
  form: {
    name: "basic",
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
  },
  fields: [
    {
      label: "Username",
      name: "username",
      id:"basic_username",
      children: {
        tag: "Input",
        id:"basic_username",
      }
    },
    {
      label: "Password",
      name: "password",
      rules: [{ required: true, message: "Please input your password!" }],
      children: {
        tag: "Password"
      }
    },
    {
      name: "remember",
      valuePropName: "checked",
      children: {
        tag: "Checkbox",
        props: {
          children: "Remember me"
        }
      }
    }
  ]
};
