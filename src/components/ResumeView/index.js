import React from 'react';
import { Tag, Collapse, Row, Col } from 'antd';
import { getRandomTagColor } from '@/utils/utils';
import Education from './Education';
import ProfessionalExp from './ProfessionalExp';
import PersonalInfo from './PersonalInfo';

const { Panel } = Collapse;

const ResumeView = ({ data }) => {
  const {
    achievements,
    activities,
    education,
    inferred_skills,
    personal_information,
    professional_experience,
    research_and_publications,
    skills,
    summary_and_objective,
    total_experience,
  } = data;

  return (
    <Row type="flex" justify="space-around">
      <Col span={24}>
        <Collapse defaultActiveKey={["personal-information", 
      "summary-objective","skills"]}>
          {personal_information && (
            <Panel header="Personal Information" key="personal-information">
              <PersonalInfo personal_information={personal_information} />
            </Panel>
          )}

          {summary_and_objective?.length > 0 && (
            <Panel header="Summary and Objective" key="summary-objective">
              <ul style={{ listStyleType: 'disc' }}>
                {summary_and_objective.map((so, index) => (
                  <li key={index}>{so}</li>
                ))}
              </ul>
            </Panel>
          )}

        {skills?.length > 0 && (
            <Panel header="Skills" key="skills">
              <ul>
                {skills.map((skill, index) => (
                  <Tag
                    key={index}
                    color={getRandomTagColor()}
                    style={{ marginBottom: 8 }}
                  >
                    {skill}
                  </Tag>
                ))}
              </ul>
            </Panel>
          )}

          {professional_experience?.length > 0 && (
            <Panel
              header="Professional Experience"
              key="professional-experience"
            >
              <ProfessionalExp
                professional_experience={professional_experience}
              />
            </Panel>
          )}

          {education?.length > 0 && (
            <Panel header="Education" key="education">
              <Education education={education} />
            </Panel>
          )}

      {achievements?.length > 0 && (
        <Panel header="Achievements" key="achievements">
          <ul>
            {achievements.map((achievement, index) => (
              <li key={index}>
                {achievement.name && achievement.name} 
                {achievement.event && <> | Event:  ${achievement.event}</>}
                {achievement.year && <> | Year:  ${achievement.year}</>}
              </li>
            ))}
          </ul>
        </Panel>
      )}


        {activities?.length > 0 && (
          <Panel header="Activities" key="activities">
            <ul>
              {activities.split(",").map((activity, index) => (
                <li key={index}>{activity.trim()}</li>
              ))}
            </ul>
          </Panel>
        )}


          {research_and_publications?.length > 0 && (
            <Panel header="Research and Publications" key="publications">
              <ul>
                {research_and_publications.map((publication, index) => (
                  <li key={index}>{publication}</li>
                ))}
              </ul>
            </Panel>
          )}

          {inferred_skills?.length > 0 && (
            <Panel header="Inferred Skills" key="inferred-skills">
              <ul>
                {inferred_skills.map((skill, index) => (
                  <Tag
                    key={index}
                    color={getRandomTagColor()}
                    style={{ marginBottom: 8 }}
                  >
                    {skill}
                  </Tag>
                ))}
              </ul>
            </Panel>
          )}
        </Collapse>
      </Col>
    </Row>
  );
};

export default ResumeView;
