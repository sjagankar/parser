import React, { useState } from "react";
import {
  List,
  Space,
  Collapse,
  Tabs,
  Row,
  Col,
  Spin,
  Button,
  Typography,
  Affix,
} from "antd";
import {
  CaretRightOutlined,
  FilePdfFilled,
  CheckOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import FileListItem from "./FileListItem";
import ExportData from "../../components/ExportData";
const { Text,Link } = Typography;
const { Panel } = Collapse;

const customPanelStyle1 = {
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: "hidden",
  background: "#1890ff05",
};

const FileListDisplay = ({
  jobId,
  status,
  fileList,
  setFileList,
  handleRemoveFile,
  setStatus,
  isUpdate,
  tags,
}) => {
  const showList = fileList.length > 0;
  // const [activeKey, setActiveKey] = useState(fileList?.[0].key || 0);
  const [exportData, setExportData] = useState([]);

  const tabHeader = (item) => (
    <Space type="flex">
      <Col>
      <Button type="link">
        <FilePdfFilled />
        <Link ellipsis={{ tooltip: item.file_name }} style={{ maxWidth: 120 }}>
          {item.file_name}
        </Link>
        </Button>
      </Col>
      <div>
        {(status === "uploading" || status === "parsing") &&
          !item?.is_complete && <Spin indicator={<LoadingOutlined />} />}
        {item?.is_complete && <CheckOutlined style={{ color: "green" }} />}
      </div>
    </Space>
  );

  const tabItems = fileList.map((item) => {
    return {
      label: tabHeader(item),
      children: (
        <FileListItem
          style={{ height: 1000}}
          jobId={jobId}
          status={status}
          item={item}
          tags={tags}
          setFileList={setFileList}
          setStatus={setStatus}
          fileList={fileList}
          handleRemoveFile={handleRemoveFile}
          isUpdate={isUpdate}
          setExportData={setExportData}
        />
      ),
      key: item.file_name.replace(/\s/g, ""),
    };
  });

  return (
    <Affix offsetTop={10}>
    <Row type="flex" justify={"space-around"} gutter={12}>
      <Col span={22}>
        {showList && (
          <Tabs
            type="card"
            tabPosition="top"
            items={tabItems}
            style={{ height: 1000 }}
            tabBarExtraContent={<ExportData data={exportData} status={status}/>}
          />
        )}
      </Col>
    </Row>
    </Affix>
  );
};

export default FileListDisplay;
