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
        Resume Parsing Using AI
      </Typography.Title>
      <Typography.Text
        style={{
          color: "#666666",
          fontSize: "20px",
          fontWeight: 400,
          marginBottom: "32px",
          fontFamily:'ui-sans-serif',
        }}
      >
        Our advanced resume parser / CV parser uses NLP for resume parsing.
      </Typography.Text>
    </div>
  );
};

export default Header;
