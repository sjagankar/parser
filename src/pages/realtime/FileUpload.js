import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styles from './index.less';

const FileUpload = ({ setBase64Data, setFile, setFileType }) => {
  const [fileList, setFileList] = useState([]);

  const handleFileUpload = (file) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const base64 = event.target.result;
      setBase64Data(base64);
      console.log('file', file);
      setFile(file.name);
      setFileType(file.type);
      setFileList([{ uid: file.uid, name: file.name, status: 'done' }]);
    };

    reader.readAsDataURL(file);
  };

  const handleFileRemove = () => {
    setFile(false);
    setFileList([]);
  };

  return (
    <div className={styles.fileUpload}>
      {fileList.length > 0 ? (
        <Upload.Dragger fileList={fileList} onRemove={handleFileRemove} style={{visibility:'hidden'}}>
        </Upload.Dragger>
      ) : (
        <Upload.Dragger beforeUpload={handleFileUpload} size="small">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to upload</p>
        </Upload.Dragger>
      )}
   {/* <Upload beforeUpload={handleFileUpload} onRemove={handleFileRemove}>
        <Button icon={<InboxOutlined />} size="large">Click or drag file to upload</Button>
      </Upload> */}
      
    </div>
  );
};

export default FileUpload;