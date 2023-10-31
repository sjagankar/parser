import React, { useEffect } from "react";
import { Button, Skeleton } from "antd";
import { fetchData } from "@/utils/hooks";
import { realTime } from "@/services/parser";
import ResumeView from "@/components/ResumeView/index";
import { FileSearchOutlined } from "@ant-design/icons";
import { data1 } from "../../constants/parsed_data";
import ExportData from "@/components/ExportData/index";

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

    setTimeout(() => {
      setFakeLoading(false);
    }, 1000);

  };

  useEffect(() => {
    console.log("Calling API");
    fileName && fileType && parseResume();
  }, [fileName, fileType]);

  return (
    <div>
      <Skeleton active loading={fakeLoading}>
        {!fakeLoading && (
          <div style={{ marginTop: 24 }}>
            <div>
              <ExportData data={data1}/>
            </div>
            <ResumeView data={data1} />
          </div>
        )}
      </Skeleton>
    </div>
  );
};

export default Parse;
