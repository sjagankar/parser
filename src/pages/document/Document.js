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
import ResumeView from '@/components/ResumeView/index';
import FileViewer from '@/components/FileViewer/index';

const { Panel } = Collapse;

const FETCH_INTEVAL = 5000;

const Document = ({
  item
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [fileUrl, setFileUrl] = useState('');
//   const {
//     data,
//     loading,
//     runAsync: getParseRequest,
//   } = fetchData(advanceParseRequest, true, []);

//   useEffect(() => {
//     let intervalId;

//     if (item.request_id && !isComplete) {
//       const fetchDataAndCheckCompletion = async () => {
//         const res = await getParseRequest({
//           request_id: item.request_id,
//           jobid: jobId,
//           source: 'App',
//           name: item.file_name,
//           isUpdate,
//           rmtt_id: item.rmttid,
//           tags: tags.join(','),
//         });
//         setIsComplete(res?.data?.is_complete);
//         if (res?.data?.is_complete) {
//           setFileList((prevFileList) =>
//             prevFileList.map((f) => {
//               if (f.request_id === item.request_id) {
//                 return { ...f, parsed_data: res?.data?.parsed_data || {},  is_complete: true, };
//               }
//               return f;
//             })
//           );
//         }
//         if (res.data.is_complete) {
//           clearInterval(intervalId);
//         }
//         setExportData((prevExportData) => [
//           ...prevExportData,
//           res?.data?.parsed_data,
//         ]);
//       };

//       !isComplete && fetchDataAndCheckCompletion();
//       intervalId = setInterval(fetchDataAndCheckCompletion, FETCH_INTEVAL);
//     }

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [item.request_id, item.is_complete, item.parsed_data, isComplete]);




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

export default Document;
