import React from "react";
import { Row, Col, Button, Card } from "antd";
import SignupForm from "./SignupForm";


export default function Page() {
  return (
    <div style={{ padding: "6px 36px" }}>
      <Row type='flex' justify={'space-around'}>
        <Col span={8}>
            <Card>
                <SignupForm />
            </Card>
        </Col>
      </Row>
    </div>
  );
}
