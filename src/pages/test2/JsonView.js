import React from "react";
import ReactJson from "react-json-view";

const JsonView = ({ data }) => {
  return (
    <ReactJson
      style={{padding:24, borderRadius:24}}
      name={false}
      src={data}
      displayDataTypes={false}
      displayObjectSize={false}
      collapsed={1}
      iconStyle="square"
      theme="apathy:inverted"
    />
  );
};

export default JsonView;