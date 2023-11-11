import React, { useEffect, useState } from "react";
import { Button, Skeleton } from "antd";
import { fetchData } from "@/utils/hooks";
import { parseJob } from "@/services/parser";
import JsonView from "@/components/JsonView";
import { FileSearchOutlined } from "@ant-design/icons";
// import { job_data } from "../../constants/parsed_data";

const Parse = ({ job_description, setLoading }) => {
  const { data, loading, runAsync: parseData } = fetchData(parseJob);
  const [showParseButton, setShowParseButton] = useState(false);

  const parseResume = () => {
    setLoading(true);
    const params = {
      job_description: job_description,
    };
    parseData(params).then((res) => {
      setLoading(false);
    });
  };

  useEffect(() => {
    setShowParseButton(job_description !== "");
  }, [job_description]);

  return (
    <div>
        {showParseButton && (
          <div style={{ marginBottom: 24 }}>
            <Button size="large" loading={loading} type="primary" icon={<FileSearchOutlined />} style={{marginTop:24, width:'100%'}} onClick={parseResume}>
              Parse Job Description
            </Button>
          </div>
        )}
        {data?.status && data?.status === "Success" && (
          <div style={{ marginTop: 24 }}>
            <JsonView data={data?.data || {}} />
          </div>
        )}
    </div>
  );
};

export default Parse;