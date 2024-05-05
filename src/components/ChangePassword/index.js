import React, { useState, useEffect } from "react";
import { Form, Input, Popover, Button, Modal, Progress, Alert } from "antd";
import { useNavigate } from "umi";
import { fetchData } from "@/utils/hooks";
import { updatePassword } from "@/services/apis";
import { QuestionCircleOutlined } from "@ant-design/icons";
import styles from "./index.less";

const passwordStatusMap = {
  ok: (
    <div className={styles.success}>
      <strong>Strong!</strong> Your password is strong.
    </div>
  ),
  pass: (
    <div className={styles.warning}>
      <strong>Good!</strong> Your password is good.
    </div>
  ),
  poor: (
    <div className={styles.error}>
      <strong>Weak!</strong> Your password is weak.
    </div>
  ),
};

const passwordProgressMap = {
  ok: "success",
  pass: "normal",
  poor: "exception",
};

const ChangePassword = () => {
  const [visible, setVisible] = useState(false);
  const [popover, setPopover] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [resetSuccess, setResetSuccess] = useState(false);
  const [resetError, setResetError] = useState(false);
  const [confirmDirty, setConfirmDirty] = useState(false);
  const [help, setHelp] = useState("");
  const [passwordStatus, setPasswordStatus] = useState("poor");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordReset, setPasswordReset] = useState(false);
  const [passwordResetError, setPasswordResetError] = useState(false);
  const [passwordResetSuccess, setPasswordResetSuccess] = useState(false);
  const [passwordResetMessage, setPasswordResetMessage] = useState("");
  const {
    data,
    loading,
    runAsync: runResetPassword,
  } = fetchData(updatePassword, true, []);




  const getPasswordStatus = () => {
    const value = form.getFieldValue("newPassword");
    if (value && value.length > 9) {
      return "ok";
    }
    if (value && value.length > 5) {
      return "pass";
    }
    return "poor";
  };

  const checkConfirm = (_, value) => {
    const promise = Promise;
    if (value && value !== form.getFieldValue("newPassword")) {
        console.log("values",value,form.getFieldValue("newPassword"));
      return promise.reject("Passwords do not match!");
    }
    return promise.resolve();
  };

  const checkPassword = (_, value) => {
    const promise = Promise;
    if (!value) {
      setVisible(!!value);
      return promise.reject("Please enter your password!");
    }
    if (!visible) {
      setVisible(!!value);
    }
    setPasswordDirty(passwordDirty || !!value);
    if (value.length < 6) {
      return promise.reject("");
    }
    if (value && confirmPassword) {
      form.validateFields(["confirm"], { force: true });
    }
    return promise.resolve();
  };

  
  const onFinish = (values) => {
    const res = runResetPassword(values);


    runResetPassword(values).then((res) => {
        console.log("res",res);
        if (!res) {
            console.log("res22",res);
            setPasswordResetSuccess(false);
            setPasswordResetError(true);
            } else {
            setPasswordResetSuccess(true);
            setPasswordResetError(false);
            }
        });


        console.log("passwordResetError",passwordResetError);
    
  };

  const renderPasswordProgress = () => {
    const value = form.getFieldValue("newPassword");
    const passwordStatus = getPasswordStatus();
    return value && value.length ? (
      <div className={styles[`progress-${passwordStatus}`]}>
        <Progress
          status={passwordProgressMap[passwordStatus]}
          className={styles.progress}
          strokeWidth={6}
          percent={value.length * 10 > 100 ? 100 : value.length * 10}
          showInfo={false}
        />
      </div>
    ) : null;
  };

  const handleConfirmBlur = (e) => {
    const { value } = e.target;
    setConfirmDirty(confirmDirty || !!value);
  };

  const checkPasswordConfirm = (_, value) => {
    const promise = Promise;
    if (value && value !== form.getFieldValue("newPassword")) {
        console.log("values",value,form.getFieldValue("newPassword"));

      return promise.reject("Passwords do not match!");
    }
    return promise.resolve();
  };

  return (
    <div className={styles.main}>
      <h3>Reset Password</h3>
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item
          name="currentPassword"
          label="Current Password"
          rules={[
            {
              required: true,

              message: "Please enter your current password!",
            },
          ]}
        >
          <Input size="large" type="password" placeholder="Current password" />
        </Form.Item>

        <Form.Item
          name="newPassword"
          label="New Password"
          rules={[
            {
              required: true,
              message: "Please enter your new password!",
            },
            // {
            //   validator: checkPassword,
            // },
          ]}
          hasFeedback
        >
         
            <Input
              size="large"
              type="password"
              placeholder="New password"
              onChange={(e) => {
                e.preventDefault();
                setPassword(e.target.value);
              }}
            />
        </Form.Item>
        {/* <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["newPassword"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            {
              validator: checkConfirm,
            },
          ]}
        >
          <Input
            size="large"
            type="password"
            placeholder="Confirm password"
            onBlur={(e) => {
              e.preventDefault();
              handleConfirmBlur(e);
            }}
            onChange={(e) => {
              e.preventDefault();
              setConfirmPassword(e.target.value);
            }}
          />
        </Form.Item> */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={loading}
          >
            Change Password
          </Button>
        </Form.Item>
      </Form>
        <div>
          {passwordResetSuccess && (
            <Alert
              message={"Password changed successfully!"}
              type="success"
              showIcon
              closable
              onClose={() => setPasswordReset(false)}
            />
          )}
          {passwordResetError && (
            <Alert
              message={"Current Password is wrong!"}
              type="error"
              showIcon
              closable
              onClose={() => setPasswordReset(false)}
            />
          )}
        </div>
    </div>
  );
};

export default ChangePassword;
