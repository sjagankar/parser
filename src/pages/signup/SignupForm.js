import React, {useState, useEffect} from "react";
import { Button, Tabs, Row, Col, Space, Form, Input, Alert, Divider, Typography } from "antd";
import { useNavigate } from "umi";
import FreeTrialForm from "../../components/FreeTrialForm";
import { register } from "@/services/apis";
import { fetchData } from "@/utils/hooks";

const SignupForm = () => {
  const [isAppsumoUser, setIsAppsumoUser] = useState(false);
  useEffect(() => {
    if (window.location.href.includes("appsumo")) {
      setIsAppsumoUser(true);
    }
  }, []);

  let navigate = useNavigate();
  const {
    data,
    loading,
    runAsync: runRegister,
  } = fetchData(register, true, []);
  const form = Form.useFormInstance('free_trial');

  const handleSubmit = (values) => {
    runRegister(values);
    form.resetFields();

  };
  return (
    <div>
      <h2>Register</h2>
      <FreeTrialForm handleSubmit={handleSubmit} isAppsumoUser={isAppsumoUser}/>
      <Row type="flex" justify={"center"}>
        <Col span={24}>
          <Button loading={loading} block form="free_trial" type="primary" htmlType="submit">
            Sign up
          </Button>
        </Col>
        <Col span={24} style={{ marginTop: 16 }}>
          {data && data.status && data.status === "error" && (
            <Alert message={data.message} type="error" showIcon />
          )}

          {data &&  data?.status != "error" && (
            <Alert
              message="You have successfully registered! Please check email for activation."
              type="success"
              showIcon
            />
          )}
        </Col>
        <Divider> <Typography.Text type="secondary">OR</Typography.Text> </Divider>
        <Col span={24}>
          <Button type="default" block onClick={() => isAppsumoUser ? navigate("/appsumo/login") : navigate("/login") }>
            Login
          </Button>
        </Col>
      </Row>
    </div>
  );
};
export default SignupForm;
