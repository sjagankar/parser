import React from 'react';
import { Spin } from 'antd';
import ResumeView from './index';

const ResumeLoader = ({ loading, data }) => (
  <Spin
    spinning={loading || (!data?.data?.is_complete && !data?.data.has_failed)}
    style={{ minHeight: 100 }}
  >
    {data?.data?.has_failed && <p>{data.data.failure_reason}</p>}
    {data?.data?.is_complete && (
      <ResumeView data={data?.data?.parsed_data || {}} />
    )}
  </Spin>
);

export default ResumeLoader;
