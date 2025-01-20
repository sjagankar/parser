import React from "react";
import { Row, Col, Statistic } from "antd";
  const TopupUsage = ({data} ) => {
  const { credits = 0, availble_topup_credits = 0, topup_credits_usage = 0 } = data;

  return (
    <Row type="flex" justify="space-between">
      <Col span={8}>
        <Statistic title="Total Credits" value={parseInt(credits)} />
      </Col>
      <Col span={8}>
        <Statistic title="Credits Used" value={parseInt(topup_credits_usage)} />
      </Col>
      <Col span={8}>
        <Statistic title="Credits Remaining" value={parseInt(availble_topup_credits)} />
      </Col>
    </Row>
  );
};

export default TopupUsage;
