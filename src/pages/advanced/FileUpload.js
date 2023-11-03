import React, { useState } from "react";
import { Upload, Popover, Spin } from "antd";
import { InboxOutlined, FilePdfOutlined } from "@ant-design/icons";
import { getFileName } from "@/utils/utils";
import styles from "./index.less";

const FileUpload = ({ jobId, setFileList, fileList = [], status }) => {
  const saveFileList = (file) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const fileType = file.type;
    if (!allowedTypes.includes(fileType)) {
      return false; // Cancel upload if file type is not allowed
    }
    const reader = new FileReader();

    reader.onload = (event) => {
      event.preventDefault();
      const base64 = event.target.result;
      const newFile = file;
      newFile.base64 = base64;
      newFile.file_name = getFileName(file.name);
      newFile.id = Date.now();
      setFileList((prevFileList) => [...prevFileList, newFile]);
    };

    reader.readAsDataURL(file);
    return false; // Cancel the default behavior
  };

  const content = (
    <p>
      <li style={{ listStyle: "disc" }}>You can bulk upload upto 10 resumes</li>
      <li style={{ listStyle: "disc" }}>Format supported : .pdf,.doc,.docx</li>
    </p>
  );

  return (
    <Spin spinning={status==='uploading'} tip={''}>
    <div className={styles.uploadWrapper}>
      <Upload.Dragger
        beforeUpload={saveFileList}
        showUploadList={false}
        maxCount={5}
        multiple
        size="small"
        accept=".pdf,.doc,.docx"
        style={{
          padding: fileList.length > 0 ? "0" : "24px 0",
          background: "#f4f8fd",
        }}
        disabled={
          fileList.length >= 10 ||
          status === "uploading" ||
          status === "parsing"
        }
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p>
          <li style={{ listStyle: "disc" }}>Click or drag files to upload</li>
          <li style={{ listStyle: "disc" }}>
            You can bulk upload upto 10 resumes
          </li>
          <li style={{ listStyle: "disc" }}>
            Format supported : .pdf,.doc,.docx
          </li>
        </p>
      </Upload.Dragger>
    </div>
    </Spin>
  );
};

export default FileUpload;
