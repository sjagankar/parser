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

const containerStyle = {
  width: '100%',
  height: 1000,
  overflow: 'auto',
  border: '1px solid #40a9ff',
};
const style = {
  width: '100%',
  height: 1000,
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
  const [container, setContainer] = React.useState(null);
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
    // <div  >
    //   <div style={style}>
    // <Affix offsetTop={0} target={() => container}>
    <Row type="flex" justify={"space-around"} gutter={12}>
      <Col span={24}>
        {showList && (
          <Tabs
          ref={setContainer}
            type="card"
            tabPosition="top"
            items={tabItems}

            tabBarExtraContent={<ExportData data={exportData} status={status}/>}
          />
        )}
      </Col>
    </Row>
    // </Affix>
    // </div>
    // </div>
  );
};

export default FileListDisplay;
