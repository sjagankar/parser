import React, { useEffect } from "react";
import { Button, Skeleton } from "antd";
import { fetchData } from "@/utils/hooks";
import { realTime } from "@/services/parser";
import ResumeView from "@/components/ResumeView/index";
import { FileSearchOutlined } from "@ant-design/icons";
import { data1 } from "../../constants/parsed_data";

const Parse = ({ fileName, fileType, base64Data, setLoading }) => {
  const { data, loading, runAsync: parseData } = fetchData(realTime);

  const parseResume = () => {
    setLoading(true);
    const params = {
      file: {
        original_filename: fileName,
        content_type: fileType,
        document_base: base64Data,
      },
    };
    parseData(params).then((res) => {
      setLoading(false);
    });
  };

  useEffect(() => {
    console.log("Calling API");
    fileName && fileType && parseResume();
  }, [fileName, fileType]);

  return (
    <div>
      <Skeleton active loading={loading}>

        {data?.status && data?.status === "Success" && (
          <div style={{ marginTop: 24 }}>
            <ResumeView data={data?.data || {}} />
          </div>
        )}
      </Skeleton>
    </div>
  );
};

export default Parse;
