import React, { useState } from "react";
import { Button, Typography } from "antd";
const { Text } = Typography;

/**
 * Renders the footer component with a list of fields that the Resume Parser is capable of extracting.
 * @returns {JSX.Element} The footer component.
 */
const Footer = () => {
  const fields = [
    "Personal Information",
    "Summary and Objective",
    "Skills",
    "Professional Experience",
    "Research and Publications",
    "Achievements",
    "Activities",
    "Inferred Skills",
  ];

  return (
    <div
      style={{
        display: "flex",
        borderRadius: 12,
        justifyContent: "space-between",
        backgroundColor: "#F5F5F5",
        padding: "16px",
        marginTop: 24,
      }}
    >
      <div>
        <Text
          style={{ fontSize: "1rem", fontWeight: "bold", color: "#333333" }}
        >
          Fields Extracted by Resume Parser
        </Text>
        <ul style={{ marginTop: "10px", listStyleType: "disc" }}>
          {fields.map((item) => (
            <li
              key={item}
              style={{
                fontSize: "1rem",
                marginBottom: "5px",
                color: "#666666",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        <Text
          style={{ fontStyle: "italic", marginTop: "10px", color: "#666666" }}
        >
          We are continuously improving our model and working on adding more
          entities. Feel free to contact us at
          <a href="mailto:hello@cvviz.com"> hello@cvviz.com</a> if you would
          like to stay updated on our latest improvements.
        </Text>
        <br />
        <br />
        <Text style={{ marginTop: "10px", color: "#666666" }}>
          Disclaimer: Submitted resumes may be used for training and improving
          the model.
        </Text>
      </div>
    </div>
  );
};

export default Footer;
