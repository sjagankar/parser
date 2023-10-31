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

const JobView = ({ data }) => {
  const {
    job_title,
    company_name,
    company_description,
    team_description,
    locations,
    job_location_type,
    employment_type,
    experience_level,
    job_id,
    job_description_and_responsibilities,
    educational_requirements,
    experience_related_requirements,
    work_authorization_requirements,
    skills_required,
    compensation,
    how_to_apply,
    miscellaneous
  } = data;

  return (
    <div className={styles.ResumeView}>
      <Row type="flex" justify="space-around">
        <Col span={24}>
          <Collapse
            size="large"
            defaultActiveKey={[
              "company_description",
            ]}
            expandIconPosition="right"
          >
            {
              company_description && (
                <Panel
                  header={
                    <div>
                      <BankOutlined />
                      <span className={styles.heading}>Company Description</span>
                    </div>
                  }
                  key="company_description"
                >
                  <div className={styles.content}>{JSON.stringify(company_description)}</div>
                </Panel>
              )
            }
            {
              team_description && (
                <Panel
                  header={
                    <div>
                      <TeamOutlined />
                      <span className={styles.heading}>Team Description</span>
                    </div>
                  }
                  key="team_description"
                >
                  <div className={styles.content}>{JSON.stringify(team_description)}</div>
                </Panel>
              )
            }
            {locations && (
              <Panel
                header={
                  <div>
                    <BankOutlined />
                    <span className={styles.heading}>Locations</span>
                  </div>
                }
                key="locations"
              >
                <div className={styles.content}>{JSON.stringify(locations)}</div>
              </Panel>
            )}
        
              {job_location_type && (
                <Panel
                  header={
                    <div>
                      <BankOutlined />
                      <span className={styles.heading}>Job Location Type</span>
                    </div>
                  }
                  key="job_location_type"
                >
                  <div className={styles.content}>{JSON.stringify(job_location_type)}</div>
                </Panel>
              )}

              {employment_type && (
                <Panel
                  header={
                    <div>
                      <BankOutlined />
                      <span className={styles.heading}>Employment Type</span>
                    </div>
                  }
                  key="employment_type"
                >
                  <div className={styles.content}>{JSON.stringify(employment_type)}</div>
                </Panel>
              )}

              {experience_level && (
                <Panel
                  header={
                    <div>
                      <BankOutlined />
                      <span className={styles.heading}>Experience Level</span>
                    </div>
                  }
                  key="experience_level"
                >
                  <div className={styles.content}>{JSON.stringify(experience_level)}</div>
                </Panel>
              )}

              {job_id && (
                <Panel
                  header={
                    <div>
                      <BankOutlined />
                      <span className={styles.heading}>Job ID</span>
                    </div>
                  }
                  key="job_id"
                >
                  <div className={styles.content}>{JSON.stringify(job_id)}</div>
                </Panel>
              )}

              {job_description_and_responsibilities && (
                <Panel
                  header={
                    <div>
                      <BankOutlined />
                      <span className={styles.heading}>Job Description and Responsibilities</span>
                    </div>
                  }
                  key="job_description_and_responsibilities"
                >
                  <div className={styles.content}>{JSON.stringify(job_description_and_responsibilities)}</div>
                </Panel>
              )}

              {educational_requirements && (
                <Panel
                  header={
                    <div>
                      <BankOutlined />
                      <span className={styles.heading}>Educational Requirements</span>
                    </div>
                  }
                  key="educational_requirements"
                >
                  <div className={styles.content}>{JSON.stringify(educational_requirements)}</div>
                </Panel>
              )}


              {experience_related_requirements && (
                <Panel
                  header={
                    <div>
                      <BankOutlined />
                      <span className={styles.heading}>Experience Related Requirements</span>
                    </div>
                  }
                  key="experience_related_requirements"
                >
                  <div className={styles.content}>{JSON.stringify(experience_related_requirements)}</div>
                </Panel>
              )}

              {work_authorization_requirements && (
                <Panel
                  header={
                    <div>
                      <BankOutlined />
                      <span className={styles.heading}>Work Authorization Requirements</span>
                    </div>
                  }
                  key="work_authorization_requirements"
                >
                  <div className={styles.content}>{JSON.stringify(work_authorization_requirements)}</div>
                </Panel>
              )}

              {skills_required && (
                <Panel
                  header={
                    <div>
                      <BankOutlined />
                      <span className={styles.heading}>Skills Required</span>
                    </div>
                  }
                  key="skills_required"
                >
                  <div className={styles.content}>{JSON.stringify(skills_required)}</div>
                </Panel>
              )}

              {compensation && (
                <Panel
                  header={
                    <div>
                      <BankOutlined />
                      <span className={styles.heading}>Compensation</span>
                    </div>
                  }
                  key="compensation"
                >
                  <div className={styles.content}>{JSON.stringify(compensation)}</div>
                </Panel>
              )}

              {how_to_apply && (
                <Panel
                  header={
                    <div>
                      <BankOutlined />
                      <span className={styles.heading}>How to Apply</span>
                    </div>
                  }
                  key="how_to_apply"
                >
                  <div className={styles.content}>{JSON.stringify(how_to_apply)}</div>
                </Panel>
              )}

              {miscellaneous && (
                <Panel
                  header={
                    <div>
                      <BankOutlined />
                      <span className={styles.heading}>Miscellaneous</span>
                    </div>
                  }
                  key="miscellaneous"
                >
                  <div className={styles.content}>{JSON.stringify(miscellaneous)}</div>
                </Panel>
              )}

          </Collapse>
        </Col>
      </Row>
    </div>
  );
};

export default JobView;
