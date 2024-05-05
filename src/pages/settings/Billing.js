import {
  Button,
  Space,
  Statistic,
  Spin,
  Modal,
  Form,
  Input,
  message,
  Popover,
  Divider,
  Row,
  Col,
} from "antd";
import React, { useState, useEffect } from "react";
import { fetchData, useAuth } from "@/utils/hooks";
import { usage, redeemCode } from "@/services/apis";
import CreditsList from "@/pages/settings/CreditsList";

const Billing = ({ showRedeem }) => {
  const [totalCredits, setTotalCredits] = useState(0);
  const [creditsUsed, setCreditsUsed] = useState(0);
  const [creditsRemaining, setCreditsRemaining] = useState(0);
  const [plan, setPlan] = useState(null);
  const [endDate, setEndDate] = useState(null); // [startDate, setStartDate
  const [openRedeemModal, setOpenRedeemModal] = useState(showRedeem);
  const [monthlyUsage, setMonthlyUsage] = useState({ month_name: '', year_value:'', record_count:0}); // [startDate, setStartDate
  const [creditsList, setCreditsList] = useState([]);
  const { token } = useAuth();

  const { data, loading, runAsync: runUsage } = fetchData(usage, true, []);
  const {
    data: redeemData,
    loading: redeemLoading,
    runAsync: runRedeem,
  } = fetchData(redeemCode, true, []);

  useEffect(() => {
    runUsage().then((data) => {
      setCreditsUsed(data.credits_used);
      setCreditsRemaining(data.remaining_credits);
      setTotalCredits(data.total_credits);
      setCreditsList(data.credits);
      setMonthlyUsage(data.monthly_usage);
      setEndDate(data.end_date);
      setPlan(data.plan);
      if (showRedeem) {
        setOpenRedeemModal(true);
        localStorage.removeItem("showRedeem");
      }
    });
  }, [token]);


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
          setTotalCredits(data.total_credits);
          if (showRedeem) {
            localStorage.removeItem("showRedeem");
          }
        });
        setOpenRedeemModal(false);
      }
    });
  };

  const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

  return (
    <div>
      <Spin spinning={loading}>
        <Divider />
        {plan && 
        <Row gutter={32} type='flex'>
          <Col span={24}>

          <Statistic title="Current Plan" value={plan.name} />
            </Col>
            <Col span={24} style={{marginTop:32}}>
            <Statistic title="Plan Expiry" value={plan.is_lifetime_deal==='1' ? 'Lifetime' : endDate} />
            </Col>
        </Row>
}
        <Divider plain orientation="left" style={{marginTop: 32}}>
          Credits for current Cycle ({monthlyUsage.month_name}' {monthlyUsage.year_value})
          </Divider>
        <Row type='flex' justify='space-between'>
          <Col span={8}>

          <Statistic title="Total Credits" value={totalCredits} />
            </Col>
          <Col span={8}>

          <Statistic title="Credits Used" value={monthlyUsage.record_count} />
            </Col>
          <Col span={8}>

          <Statistic title="Credits Remaining" value={creditsRemaining} />
            </Col>
        </Row>
      
        <Divider />
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
