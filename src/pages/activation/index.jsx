import React from "react";
import Activation from "./Activation";
import { Row, Col, Button, Card } from "antd";

export default function Page() {
  return (
    <div style={{ padding: "6px 36px" }}>
      <Row type="flex" justify={"space-around"}>
        <Col span={8}>
          <Card>
            <Activation />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
