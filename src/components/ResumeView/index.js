import React from "react";
import { Tag, Collapse, Row, Col } from "antd";
import { getRandomTagColor } from "@/utils/utils";
import {
  UserOutlined,
  ProfileOutlined,
  ToolOutlined,
  BankOutlined,
  TrophyOutlined,
  TeamOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Education from "./Education";
import ProfessionalExp from "./ProfessionalExp";
import PersonalInfo from "./PersonalInfo";
import styles from "./index.less";
const { Panel } = Collapse;

// font-weight: 500;
// font-size: 16px;
// margin-left: 4px;

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
    <div className={styles.ResumeView}>
      <Row type="flex" justify="space-around">
        <Col span={24}>
          <Collapse
            size="large"
            defaultActiveKey={[
              "personal-information",
              "summary-objective",
              "skills",
            ]}
            expandIconPosition="right"
          >
            {personal_information && (
              <Panel
                header={
                  <span>
                    <UserOutlined style={{ marginRight: 5 }} /> Personal
                    Information
                  </span>
                }
                key="personal-information"
              >
                <PersonalInfo personal_information={personal_information} />
              </Panel>
            )}

            {summary_and_objective?.length > 0 && (
              <Panel
                header={
                  <span>
                    <ProfileOutlined style={{ marginRight: 5 }} /> Summary and
                    Objective
                  </span>
                }
                key="summary-objective"
              >
                <ul style={{ listStyleType: "disc" }}>
                  {summary_and_objective.map((so, index) => (
                    <li key={index}>{so}</li>
                  ))}
                </ul>
              </Panel>
            )}

            {skills?.length > 0 && (
              <Panel
                header={
                  <span>
                    <ToolOutlined style={{ marginRight: 5 }} /> Skills
                  </span>
                }
                key="skills"
              >
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

            {inferred_skills?.length > 0 && (
              <Panel
                header={
                  <span>
                    <ToolOutlined style={{ marginRight: 5 }} /> Inferred Skills
                  </span>
                }
                key="inferred-skills"
              >
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

            {professional_experience?.length > 0 && (
              <Panel
                header={
                  <span>
                    <BankOutlined style={{ marginRight: 5 }} /> Professional
                    Experience
                  </span>
                }
                key="professional-experience"
              >
                <ProfessionalExp
                  professional_experience={professional_experience}
                />
              </Panel>
            )}

            {education?.length > 0 && (
              <Panel
                header={
                  <span>
                    <BankOutlined style={{ marginRight: 5 }} /> Education
                  </span>
                }
                key="education"
              >
                <Education education={education} />
              </Panel>
            )}

            {achievements?.length > 0 && (
              <Panel
                header={
                  <span>
                    <TrophyOutlined style={{ marginRight: 5 }} /> Achievements
                  </span>
                }
                key="achievements"
              >
                <ul>
                  {achievements.map((achievement, index) => (
                    <li key={index}>
                      {achievement.name && achievement.name}
                      {achievement.event && <> | Event: ${achievement.event}</>}
                      {achievement.year && <> | Year: ${achievement.year}</>}
                    </li>
                  ))}
                </ul>
              </Panel>
            )}

            {activities?.length > 0 && (
              <Panel
                header={
                  <span>
                    <TeamOutlined style={{ marginRight: 5 }} /> Activities
                  </span>
                }
                key="activities"
              >
                <ul>
                  {activities.split(",").map((activity, index) => (
                    <li key={index}>{activity.trim()}</li>
                  ))}
                </ul>
              </Panel>
            )}

            {research_and_publications?.length > 0 && (
              <Panel
                header={
                  <span>
                    <FileTextOutlined style={{ marginRight: 5 }} /> Research and
                    Publications
                  </span>
                }
                key="publications"
              >
                <ul>
                  {research_and_publications.map((publication, index) => (
                    <li key={index}>{publication}</li>
                  ))}
                </ul>
              </Panel>
            )}
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};

export default ResumeView;
