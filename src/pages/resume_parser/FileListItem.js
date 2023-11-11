/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Spin, Modal, Tooltip, Collapse, Skeleton, Card } from 'antd';
import {
  WarningOutlined,
  DeleteOutlined,
  LoadingOutlined,
  CheckOutlined,
  FilePdfFilled
} from '@ant-design/icons';
import { fetchData } from '@/utils/hooks';
import { advanceParseRequest } from '@/services/resume';
import { parseRequest } from '@/services/apis';
import ResumeView from '@/components/ResumeView/index';
import FileViewer from '@/components/FileViewer/index';
import {useAuth} from "@/utils/hooks";

const { Panel } = Collapse;

const FETCH_INTEVAL = 5000;

const FileListItem = ({
  jobId,
  status,
  item,
  handleRemoveFile,
  fileList,
  setFileList,
  setStatus,
  isUpdate,
  tags,
  setExportData,
}) => {
  const { isLogin } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [parsedData, setParsedData] = useState();
  const [duplicateName, setDuplicateName] = useState('');
  const [fileUrl, setFileUrl] = useState('');
  const {
    data,
    loading,
    runAsync: getParseRequest,
  } = fetchData(isLogin ? parseRequest :  advanceParseRequest, true, []);

  useEffect(() => {
    let intervalId;

    if (item.request_id && !isComplete) {
      const fetchDataAndCheckCompletion = async () => {
        const res = await getParseRequest({
          request_id: item.request_id,
          jobid: jobId,
          source: 'App',
          name: item.file_name,
          isUpdate,
          rmtt_id: item.rmttid,
          tags: tags.join(','),
        });
        setIsComplete(res?.data?.is_complete);
        if (res?.data?.is_complete) {
          setFileList((prevFileList) =>
            prevFileList.map((f) => {
              if (f.request_id === item.request_id) {
                return { ...f, parsed_data: res?.data?.parsed_data || {},  is_complete: true, };
              }
              return f;
            })
          );
        }
        setIsDuplicate(res?.isduplicate);
        setDuplicateName(res?.dname?.[0]);
        if (res.data.is_complete) {
          clearInterval(intervalId);
        }
        setParsedData(res?.data?.parsed_data || {});
        setExportData((prevExportData) => [
          ...prevExportData,
          res?.data?.parsed_data,
        ]);
      };

      !isComplete && fetchDataAndCheckCompletion();
      intervalId = setInterval(fetchDataAndCheckCompletion, FETCH_INTEVAL);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [item.request_id, item.is_complete, item.parsed_data, isComplete]);


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const panelHeader = (
    <Row type="flex" justify="space-between">
      <Col>
        <FilePdfFilled/>
        <Button
          type="text"
          style={{ marginLeft: 10, flexGrow: 1, textAlign: 'left' }}
          className="file-name"
          size="small"
        >
          {item.file_name}
        </Button>
      </Col>
      <Col>
        {/* <span style={{ marginLeft: 10, flexGrow: 1 }}>{item.request_id}</span> */}
        {(status === 'uploading' || status === 'parsing') && !isComplete && (
          <Spin indicator={<LoadingOutlined />} />
        )}
        {(!isDuplicate || isUpdate) && isComplete && (
          <CheckOutlined style={{ color: 'green' }} />
        )}

        {!isUpdate && isDuplicate && isComplete && (
          <Tooltip title={`Duplicate file : ${duplicateName}`}>
            <WarningOutlined style={{ color: 'orange' }} />
          </Tooltip>
        )}

        {!isUpdate && status === 'adding' && !item.request_id && (
          <Button
            type="link"
            danger
            size="small"
            onClick={() => handleRemoveFile(item)}
            style={{ marginLeft: 'auto' }}
          >
            <DeleteOutlined />
          </Button>
        )}
      </Col>
    </Row>
  );

  return (
        <Row type='flex' style={{height:1000, paddingBottom:24}} justify={'space-around'} gutter={12}>
          <Col span={12}>
              <FileViewer fileName={item.file_name} />
          </Col>
          <Col span={12}>
          {item.is_complete && (
            <div>
              <ResumeView data={item.parsed_data ? item.parsed_data : {}} />
            </div>
          )}

          {!item.is_complete && (
            <Card>
            <Skeleton active />
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
              <Skeleton active />
            </Card>
          )
          }

          </Col>
        </Row>
  );
};

export default FileListItem;
