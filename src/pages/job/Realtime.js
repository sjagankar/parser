import React, { useState } from "react";
import { Layout, Row, Col } from "antd";
import Parse from "./Parse";
import JobDescription from "./JobDescription";

const { Header, Content } = Layout;

const Realtime = () => {
  const [job_description, setJobDescription] = useState();
  const [loading, setLoading] = useState(false);
  return (
    <Row gutter={16} type="flex" justify="space-around">
      <Col span={24}>
        <JobDescription setJobDescription={setJobDescription} />
      </Col>
      <Col span={24}>
        {job_description && (
          <Parse job_description={job_description} setLoading={setLoading} />
        )}
      </Col>
    </Row>
  );
};

export default Realtime;
