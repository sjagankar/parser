import React from "react";
import { Row, Col, Button, Card } from "antd";
import Login from "./Login";


export default function Page() {
  return (
    <div style={{ padding: "6px 16px" }}>
      <Row type='flex' justify={'space-around'}>
        <Col span={8}>
            <Card>
                <Login />
            </Card>
        </Col>
      </Row>
    </div>
  );
}
