import React from "react";
import Realtime from "./Realtime";
import { Card, Row, Col } from "antd";
import Header from "./Header";
import Footer from "./Footer";

export default function Page() {
  return (
    <Row type="flex" gutter={[16, 16]} justify={"space-around"}>
      <Col span={12}>
        <Card style={{borderRadius:36}}>
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
