import React from "react";
import { Row, Col, Button, Card } from "antd";
import ForgotPassword from "./ForgotPassword";


export default function Page() {
  return (
    <div style={{ padding: "6px 16px" }}>
      <Row type='flex' justify={'space-around'}>
        <Col span={8}>
            <Card>
                <ForgotPassword />
            </Card>
        </Col>
      </Row>
    </div>
  );
}
