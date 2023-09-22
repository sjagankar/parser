import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const ProfessionalExp = ({ professional_experience }) => (
  <div>
    {professional_experience?.length > 0 && (
      <>
        {professional_experience.map((experience, index) => (
          <Card key={index} style={{ marginBottom: 16 }}>
            <Meta
              title={experience.company}
              description={experience.job_title}
            />
            <p>Location: {experience.location}</p>
            <h3>Responsibilities</h3>
            <ul style={{ listStyleType: 'disc' }}>
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
            <p>
              Start Date: {experience.start_date} - End Date:{' '}
              {experience.end_date}
            </p>
          </Card>
        ))}
      </>
    )}
  </div>
);

export default ProfessionalExp;
