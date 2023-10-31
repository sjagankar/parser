import React from "react";
import { Card, Row, Col } from "antd";
import {job_data} from '../../constants/parsed_data';
import JobView from '../../components/JobView';
import JsonView from './JsonView';

export default function Page() {
  return (
    <Row justify="center">
      <Col xs={24} sm={20} md={16} lg={12} xl={12}>
        <Card style={{ borderRadius: 36 }}>
          <div>
            {/* <JobView data={job_data}/> */}
            <JsonView data={job_data}/>
          </div>
        </Card>
      </Col>
    </Row>
  );
}
