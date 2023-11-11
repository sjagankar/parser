import React from 'react';
import { Input } from 'antd';
import styles from './index.less';

const JobDescription = ({ setJobDescription }) => {
  const handleJobDescriptionChange = (event) => {
    setJobDescription(event.target.value);
  };

  return (
    <div className={styles.jobDescription}>
      <Input.TextArea placeholder="Enter job description here" rows={10} onChange={handleJobDescriptionChange} />
    </div>
  );
};

export default JobDescription;