import React, { useState } from "react";
import { Button, Typography } from "antd";

const Header = () => {
  return (
    <div style={{ textAlign: "center"}}>
      <Typography.Title level={2} style={{ color: "#1890FF" }}>Resume Parser</Typography.Title>
      <Typography.Text style={{ color: "#666666", fontSize: "18px", marginBottom: "16px" }}>
        Upload a resume and see the results in real-time
      </Typography.Text>
      <br/>
      {/* <Typography.Text type="secondary" style={{ color: "#999999", fontSize: "16px" }}>
        Our AI-powered parser extracts key information from your resume and presents it in an easy-to-read format.
      </Typography.Text> */}
    </div>
  );
};

export default Header;