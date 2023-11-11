import {
  Button,
  Space,
  Statistic,
  Spin,
  Modal,
  Form,
  Input,
  message,
} from "antd";
import React, { useState, useEffect } from "react";
import { fetchData, useAuth } from "@/utils/hooks";
import { usage, redeemCode } from "@/services/apis";

const Billing = ({ showRedeem }) => {
    const [totalCredits, setTotalCredits] = useState(0);
  const [creditsUsed, setCreditsUsed] = useState(0);
  const [creditsRemaining, setCreditsRemaining] = useState(0);
  const [openRedeemModal, setOpenRedeemModal] = useState(showRedeem);
  const {token} = useAuth();

  const { data, loading, runAsync: runUsage } = fetchData(usage, true, []);
  const {
    data: redeemData,
    loading: redeemLoading,
    runAsync: runRedeem,
  } = fetchData(redeemCode, true, []);

  useEffect(() => {
    console.log("token", token);
    runUsage().then((data) => {
      setCreditsUsed(data.credits_used);
      setCreditsRemaining(data.remaining_credits);
      setTotalCredits(data.total_credits);
      if (showRedeem) {
        setOpenRedeemModal(true);
        localStorage.removeItem("showRedeem");
      }
    });
  }, [token]);

  const handleBuyCredits = () => {
    // Implement your buy credits logic here
    setCreditsRemaining(creditsRemaining + 10);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    runRedeem(values).then((res) => {
      if (res && res.status === "error") {
        message.error(res.message);
      } else {
        message.success("Code redeemed successfully!");
        runUsage().then((data) => {
          setCreditsUsed(data.credits_used);
          setCreditsRemaining(data.remaining_credits);
          if (showRedeem) {
            localStorage.removeItem("showRedeem");
          }
        });
        setOpenRedeemModal(false);
      }
    });
  };

  return (
    <div>
      <Spin spinning={loading}>
        <Space direction="vertical" size="middle">
          <Statistic title="Total Credits" value={totalCredits} />
          <Statistic title="Credits Used" value={creditsUsed} />

          <Statistic title="Credits Remaining" value={creditsRemaining} />

          {/* <Button type="primary" onClick={handleBuyCredits}>
                    Buy Credits
                </Button> */}
        </Space>
      </Spin>

      <Modal
        title="Redeem Appsumo Code"
        open={openRedeemModal}
        onCancel={() => setOpenRedeemModal(false)}
        okText="Redeem"
        okButtonProps={{
          form: "redeem",
          htmlType: "submit",
          loading: redeemLoading,
        }}
      >
        <Form name="redeem" onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Appsumo Code"
            name="appsumo_code"
            rules={[
              {
                required: true,
                message: "Please input Appsumo Code",
              },
            ]}
          >
            <Input placeholder="Appsumo Code" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Billing;
