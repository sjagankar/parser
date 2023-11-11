import React, {useEffect} from 'react';
import { Button, Row, Col } from 'antd';
import { fetchData } from '@/utils/hooks';
import {
  uploadFiles,
  advanceBulkParse,
  getBulkParseRequest,
} from '@/services/resume';

const ParseRequests = ({
  status,
  jobId,
  fileList,
  setFileList,
  setStatus,
  closeDrawer,
}) => {
  const { runAsync: startUpload } = fetchData(uploadFiles, true, []);

  useEffect(() => {
    status !== 'complete' &&  fileList.length > 0 && handleFileUpload();
  }, [fileList.length]);


  const handleFileUpload = () => {
    if (status === 'complete' && fileList.length > 0) {
      setFileList([]);
      setStatus('adding');
      return;
    }

    setStatus('uploading');
    const formData = new FormData();
    formData.append('job_id', jobId);
    // console.log('fileList', fileList);
    if (fileList && fileList.length > 0) {
      fileList.forEach((file) => {
        // console.log('file', file);
        if (file.request_id && file.request_id !== '') {
          // Do nothing
        } else {
            console.log('file.file_name', file.file_name);
          formData.append('files[]', file, file.file_name);
        }
      });

      // console.log('formData', formData);
      // console.log('formData length', formData.length);
      // console.log('formData job_id', formData.get('job_id'));

      startUpload(formData).then(() => {
        setStatus('uploaded');
        handleParseRequests();
      });
    }
  };

  const { runAsync: sendParseRequest } = fetchData(advanceBulkParse, true, []);
  const { runAsync: getParseRequests } = fetchData(
    getBulkParseRequest,
    true,
    []
  );
  const handleParseRequests = async () => {
    setStatus('parsing');
    const updatedFileList = [...fileList];
    // const parsedRequestIds = []; // Array to store request IDs
    const files = [];
    for (let i = 0; i < updatedFileList.length; i += 1) {
      const file = updatedFileList[i];
      // Skip the file if it contains a request_id and is not empty
      if (file.request_id && file.request_id !== '') {
        // Do nothing
      } else {
        files.push({
          original_filename: file.name,
          content_type: file.type,
          document_base: file.base64,
        });
      }
    }

    const response = await sendParseRequest({
      jobid: jobId,
      source: 'App',
      name: '',
      tags: '',
      fileData: {
        files,
      },
    });
    const { child_request_ids, request_id } = response.data;
    // const updatedFileList = [...fileList];
    for (let i = 0; i < updatedFileList.length; i += 1) {
      const file = updatedFileList[i];
      // Skip the file if it contains a request_id and is not empty
      if (file.request_id && file.request_id !== '') {
        // Do nothing
      } else {
        updatedFileList[i] = {
          ...file,
          request_id: child_request_ids[i],
        };
      }
    }
    setFileList(updatedFileList);
    console.log('updatedFileList', updatedFileList);

    getChildJobs(request_id);
    // updatedFileList[i] = { ...file, request_id: response.data.request_id };
    // setFileList((prevFileList) =>
    //   prevFileList.map((f) => {
    //     if (f.id === file.id) {
    //       return { ...f, request_id: response.data.request_id };
    //     }
    //     return f;
    //   })
    // );
  };



  const getChildJobs = async (requestId) => {
    const response = await getParseRequests(requestId);
    console.log('response', response);
    const allComplete = response.data.every((item) => item.is_complete);
    // const updatedFileList = fileList.map((file, i) => ({
    //   ...file,
    //   request_id: response.data[i].id,
    //   // is_complete: response.data[i].is_complete,
    //   // parsed_data: response.data[i].parsed_data,
    // }));
    // setFileList(updatedFileList);
    if (allComplete) {
      setStatus('complete');
    } else {
      setTimeout(() => {
        getChildJobs(requestId);
      }, 5000);
    }
  };

  return (
    <div></div>
  );
};

export default ParseRequests;
