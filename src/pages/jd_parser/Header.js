import React from "react";
import { Button, Typography } from "antd";

const Header = () => {
  return (
    <div
      style={{
        textAlign: "center",
        background: "#fff",
        marginTop: 12,
        borderRadius: 12,
      }}
    >
      <Typography.Title
        level={2}
        style={{
          color: "#1972f5",
          marginTop: 0,
          fontWeight: 500,
          marginBottom: "16px",
          fontFamily:'ui-sans-serif',
        }}
      >
        Job Description Parser
      </Typography.Title>
    </div>
  );
};

export default Header;
