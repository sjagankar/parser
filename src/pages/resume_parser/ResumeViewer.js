import React, {useEffect} from 'react';
import { Button, Row, Col, Card } from 'antd';
const FILEMAN_URL = 'https://filemanuat.cvviz.com/parser/778_files/-99';


const ResumeViewer = ({
   fileName,
   fileUrl,
}) => {


  return (
    <Card>
        <iframe
            src={`${FILEMAN_URL}/${fileName}`}
            width="100%"
            height="100%"
            style={{ border: "none", height:'900px' }}
        ></iframe>

    </Card>
  );
};

export default ResumeViewer;
