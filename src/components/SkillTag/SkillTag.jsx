import React from 'react'
import {Tag} from 'antd';

const SkillTag = ({data }) => {
  const {key, skill} = data;
  return (
    <Tag style={{ margin: 5}} key={key}>
      {skill}
    </Tag>
  )
}

export default SkillTag;