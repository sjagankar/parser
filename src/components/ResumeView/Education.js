import React from 'react';
import { Card, List } from 'antd';

const { Meta } = Card;

const Education = ({ education }) => (
  <List
    dataSource={education}
    renderItem={(item) => (
      <Card style={{ marginBottom: 16 }}>
        <Meta title={item.institution} description={`Major: ${item.major}`} />
        <br />
        <p>Degree: {item.degree}</p>
        <p>Rank: {item.rank}</p>
        <p>Start Date: {item.start_date}</p>
        <p>End Date: {item.end_date}</p>
        <p>GPA Grade: {item.gpa_grade}</p>
      </Card>
    )}
  />
);

export default Education;
