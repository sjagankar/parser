import React from "react";
import { Row, Col, Button, Space, Card } from "antd";
import APIDocumentation from "./APIDocumentation";


export default function Page() {
  return (
    <Card>
      <Row>
        <Col span={24}>
          <APIDocumentation  />
        </Col>
      </Row>
    </Card>
  );
}
