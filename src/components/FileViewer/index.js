import React from 'react';
import GoogleDocsViewer from 'react-google-docs-viewer';
import styles from './index.less';


const FILEMAN_URL = 'https://filemanuat.cvviz.com/parser/778_files/-99';

const FileViewer = ({ fileName }) => {

    const url = `${FILEMAN_URL}/${fileName}`;
    const type = fileName.split('.').pop();

  let appType;
  switch (type.toLowerCase()) {
    case 'doc':
      appType = 'application/msword';
      break;
    case 'docx':
      appType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      break;
    case 'rtf':
      appType = 'application/rtf';
      break;
    case 'epub':
      appType = 'application/epub+zip';
      break;
    case 'txt':
      appType = 'application/plain';
      break;
    default:
      appType = 'application/pdf';
      break;
  }

  const isBinary = url.includes('docrender.php');
  const docViewer = isBinary ? (
    <GoogleDocsViewer
      width="100%"
      style={{ border: 'none !important', backgroundColor: 'white' }}
      height="100%"
      fileUrl={url}
    />
  ) : (
    <embed
      src={`${url}`}
      style={{ width: '100%', height: '100%' }}
      type={appType}
    />
  );
  return (
    <div className={styles.resumeViewer}>
      {type.toLowerCase() === 'doc' || type.toLowerCase() === 'docx' ? (
        <iframe
          height="100%"
          src={`https://view.officeapps.live.com/op/embed.aspx?src=${url}`}
          style={{ border: 'none' }}
          title="View Resume"
          width="100%"
        />
      ) : (
        docViewer
      )}
    </div>
  );
};

export default FileViewer;