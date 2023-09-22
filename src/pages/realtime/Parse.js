import React, { useEffect } from "react";
import { Button, Skeleton } from "antd";
import { fetchData } from "@/utils/hooks";
import { realTime } from "@/services/parser";
import ResumeView from "@/components/ResumeView/index";
import { FileSearchOutlined } from "@ant-design/icons";
import { data1 } from "../../constants/parsed_data";

const Parse = ({ fileName, fileType, base64Data, setLoading }) => {
  const { data, loading, runAsync: parseData } = fetchData(realTime);
  const [fakeLoading, setFakeLoading] = React.useState(false);

  const parseResume = () => {
    setLoading(true);
    setFakeLoading(true);
    const params = {
      file: {
        original_filename: fileName,
        content_type: fileType,
        document_base: base64Data,
      },
    };

    console.log("params", params);

    //simulate 5 mins loading
    // setTimeout(() => {
    //   setFakeLoading(false);
    // }, 1000);

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
      {/* <Button type="primary" size='large' icon={<FileSearchOutlined />} loading={loading} onClick={parseResume}>
        Parse Resume
      </Button> */}
      <Skeleton active loading={fakeLoading}>
        {/* {!fakeLoading && (
          <div style={{ marginTop: 24 }}>
            <ResumeView data={data1} />
          </div>
        )} */}

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
