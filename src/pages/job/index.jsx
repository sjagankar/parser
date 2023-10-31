import React from "react";
import Realtime from "./Realtime";
import { Card, Row, Col } from "antd";
import Header from "./Header";
import Footer from "./Footer";

export default function Page() {
  return (
    <Row justify="center">
      <Col xs={24} sm={20} md={16} lg={12} xl={12}>
        <Card style={{ borderRadius: 36 }}>
          <Header />
          <div style={{ margin: "32px auto" }}>
            <Realtime />
          </div>
          <Footer />
        </Card>
      </Col>
    </Row>
  );
}
