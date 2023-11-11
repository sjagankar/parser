import react, { useState, useEffect } from "react";
import { Row, Col, Card } from "antd";
import FileUpload from "./FileUpload";
import FileListDisplay from "./FileListDisplay";
import ParseRequests from "./ParseRequests";
import Header from "./Header";
import Footer from "./Footer";

const AdvanceParse = ({
  jobId = -99,
  refreshCandidate = false,
  closeDrawer,
  isUpdate = false,
  files = [],
}) => {
  const [fileList, setFileList] = useState(files);
  const [status, setStatus] = useState("adding");
  const [tags, setTags] = useState([]);

  const handleRemoveFile = (file) => {
    setFileList((prevFileList) => prevFileList.filter((f) => f.id !== file.id));
  };

  useEffect(() => {
    // Check if all files have is_complete set to true
    const allFilesComplete = fileList.every((file) => file?.is_complete);
    if (fileList.length > 0 && allFilesComplete) {
      setStatus("complete"); // Update the status to 'complete'
      refreshCandidate && refreshCandidate(); // Refresh the candidate list
    }
  }, [fileList]);
  return (
    <Row type="flex" gutter={24} justify={'space-around'}>
      <Col span={(!fileList.length > 0 || status==='uploading' ) ? 12 : 24}>
        <Card style={{ borderRadius: 36, background: (fileList.length>0 && status !=='uploading' ) ? 'transparent' : 'white' }}>
        {(!fileList.length > 0 || status==='uploading' ) &&  <Header /> }
          <div style={{ margin: "32px auto" }}>
            {!isUpdate && (!fileList.length > 0 || status === "uploading") && (
              <Col span={24}>
                <FileUpload
                  jobId={jobId}
                  fileList={fileList}
                  status={status}
                  setFileList={setFileList}
                />
              </Col>
            )}

            {status !== "uploading" && fileList.length > 0 && (
              <Col span={24}>
                <FileListDisplay
                  jobId={jobId}
                  isUpdate={isUpdate}
                  fileList={fileList}
                  setFileList={setFileList}
                  status={status}
                  tags={tags}
                  setStatus={setStatus}
                  handleRemoveFile={handleRemoveFile}
                />
              </Col>
            )}

            {!isUpdate && (
              <Col span={24}>
                <div style={{ marginTop: 24 }}>
                  <ParseRequests
                    closeDrawer={closeDrawer}
                    refreshCandidate={refreshCandidate}
                    jobId={jobId}
                    status={status}
                    fileList={fileList}
                    setFileList={setFileList}
                    setStatus={setStatus}
                  />
                </div>
              </Col>
            )}
          </div>
          {(!fileList.length > 0 || status==='uploading' ) && <Footer /> }
        </Card>
      </Col>
    </Row>
  );
};

export default AdvanceParse;
