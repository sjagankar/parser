import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select } from "antd";

const FreeTrialForm = ({
  handleCancel,
  handleSubmit,
  isAppsumoUser = false,
}) => {
  const onFinish = (values) => {
    handleSubmit({ ...values, isAppsumoUser: isAppsumoUser ? 1 : 0 });
  };

  return (
    <Form name="free_trial" onFinish={onFinish} layout="vertical">
      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input placeholder="Name" />
      </Form.Item>

      <Form.Item
        label="Work Email Address"
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

      <Form.Item
        label="Company Name"
        name="company_name"
        rules={[
          {
            required: true,
            message: "Please input your company!",
          },
        ]}
      >
        <Input placeholder="Company" />
      </Form.Item>

      {/* <Form.Item label="Designation" name="designation">
        <Input placeholder="Designation" />
      </Form.Item> */}

      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          {
            required: true,
            message: "Please input your phone!",
          },
        ]}
      >
        <Input placeholder="Phone" />
      </Form.Item>

      <Form.Item
        label="Expected Monthly Volume"
        name="expected_monthly_volume"
        rules={[
          {
            required: true,
            message: "Please select your monthly volume!",
          },
        ]}
      >
        <Select placeholder="Select volume">
          <Option value="Less than 100">Less than 100</Option>
          <Option value="100 - 500">100 - 500</Option>
          <Option value="500 - 1000">500 - 1,000</Option>
          <Option value="1000 - 5000">1,000 - 5,000</Option>
          <Option value="5000 - 10000">5,000 - 10,000</Option>
          <Option value="10000 - 50000">10,000 - 50,000</Option>
          <Option value="50000 - 100000">50,000 - 100,000</Option>
          <Option value="100000+">More than 100000</Option>
        </Select>
      </Form.Item>

      {isAppsumoUser && (
        <Form.Item
          label="Appsumo Code"
          name="appsumo_code"
          rules={[
            {
              required: true,
              message: "Please input appsumo code!",
            },
          ]}
        >
          <Input placeholder="Appsumo Code" />
        </Form.Item>
      )}
    </Form>
  );
};

export default FreeTrialForm;
