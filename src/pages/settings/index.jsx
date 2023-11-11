import React from "react";
import { Card, Row, Col, Tabs } from "antd";
import SettingTabs from "./SettingTabs";


export default function Page() {
  return (
    <Row justify="center">
      <Col xs={24} sm={20} md={16} lg={12} xl={12}>
        <Card style={{ borderRadius: 24 }}>
          <div>
            <SettingTabs />
          </div>
        </Card>
      </Col>
    </Row>
  );
}
