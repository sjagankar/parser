import React from "react";
import { Button, Dropdown, Menu, Row, Col } from "antd";
import json2csv from "json2csv";
import {
  FileExcelOutlined,
  FileOutlined,
  ExportOutlined,
} from "@ant-design/icons";

const ExportData = ({ data, status }) => {
  const exportToJSON = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(data)], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "data.json";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  };

  const exportToCSV = () => {
    try {
      const fields = [];
      const flatData = [data].map((item) => {
        const flatItem = {};
        for (const key in item) {
          if (typeof item[key] === "object" && item[key] !== null) {
            for (const subKey in item[key]) {
              flatItem[`${key}_${subKey}`] = item[key][subKey];
              if (!fields.includes(`${key}_${subKey}`)) {
                fields.push(`${key}_${subKey}`);
              }
            }
          } else {
            flatItem[key] = item[key];
            if (!fields.includes(key)) {
              fields.push(key);
            }
          }
        }
        return flatItem;
      });

      const csv = json2csv.parse(flatData, { fields });

      const blob = new Blob([csv], { type: "text/csv" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "data.csv";
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating CSV: ", error);
    }
  };

  const menu = (
    <Menu>
      <Menu.Item key="json" onClick={exportToJSON}>
        <FileOutlined /> Export to JSON
      </Menu.Item>
      <Menu.Item key="csv" onClick={exportToCSV}>
        <FileExcelOutlined /> Export to CSV
      </Menu.Item>
    </Menu>
  );

  return (
    <Row type="flex" justify="space-end">
      <Col>
        <Dropdown overlay={menu} trigger={["hover"]}  disabled={status!=='complete'}>
          <Button disabled={status!=='complete'} type="primary" style={{ marginBottom: 16 }}>
            <ExportOutlined /> Export Data
          </Button>
        </Dropdown>
      </Col>
    </Row>
  );
};

export default ExportData;
