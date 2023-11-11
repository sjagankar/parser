import React from "react";
import { Row, Col, Button, Space } from "antd";
import DocumentTabs from "./DocumentTabs";

export default function Page() {
  return (
    <div style={{ padding: "6px 36px" }}>
      <Row>
        {/* <Col span={24}>
          <Row justify={"space-between"}>
            <h2>Documents</h2>
            <Button type="primary">Add New</Button>
          </Row>
        </Col> */}
        <Col span={24}>
          <DocumentTabs />
        </Col>
      </Row>
    </div>
  );
}
