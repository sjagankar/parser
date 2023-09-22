import React, { useState } from 'react';
import { Layout, Row, Col } from 'antd';
import FileUpload from './FileUpload';
import Parse from './Parse';

const { Header, Content } = Layout;

const Realtime = () => {
  const [base64Data, setBase64Data] = useState();
  const [fileType, setFileType] = useState();
  const [requestId, setRequestId] = useState();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState();

  return (
        <Row gutter={16} type="flex" justify="space-around">
          <Col span={24}>
            <FileUpload
              setBase64Data={setBase64Data}
              setFile={setFile}
              setFileType={setFileType}
            />
          </Col>
          <Col span={24}>
            {file && base64Data && (
              <Parse
                base64Data={base64Data}
                fileName={file}
                fileType={fileType}
                setRequestId={setRequestId}
                setLoading={setLoading}
              />
            )}
          </Col>
        </Row>
  );
};

export default Realtime;
