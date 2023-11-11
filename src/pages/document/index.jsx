import React from "react";
import { Row, Col, Button, Space } from "antd";
import Document from "./Document";
import Header from "./Header";

const item = {
  file_name: "resume_ui.pdf",
  file_type: "pdf",
  is_complete: true,
  parsed_data: {
    achievements: [
      {
        event: "2015",
        name: "Recipient of ‘Employee of the month’ award @ Webfosys",
        year: "None",
      },
      {
        event: "None",
        name: "Consistently recognized for demonstrating effective technical skills & accomplishing projects on tight schedules",
        year: "None",
      },
      {
        event: "None",
        name: "Came 1st in inter school drawing competition held in Hooghly, West Bengal",
        year: "None",
      },
      {
        event: "None",
        name: "Got 1st division in Bangiya Sangeet Parishad Passed Bratachari Kendrya",
        year: "None",
      },
    ],
    activities:
      "Nayakmandali held in Netaji Indoor Stadium, Kolkata.\n• Organized technical and cultural activities at school and college level.\n• Participated in ROBOTICS and CODING event in tech fest of various engineering colleges.",
    education: [
      {
        degree: "B.Tech.",
        end_date: "31-Dec-2013",
        gpa_grade: "64.7",
        institution: "Institute of Technology And Marine Engineering",
        major: "Electronics & Communication",
        rank: "",
        start_date: "01-Jan-2013",
      },
      {
        degree: "",
        end_date: "",
        gpa_grade: "",
        institution: "",
        major: "",
        rank: "",
        start_date: "",
      },
    ],
    inferred_skills: [
      "R",
      "HTML5",
      "AGILE",
      "DATA VISUALIZATION",
      "COMMUNICATION",
      "ANGULARJS",
      "MONITORING",
      "IOT",
      "SECURITY",
      "DASHBOARDS",
      "UI",
      "DIGITAL MARKETING",
      "PREDICTIVE ANALYSIS",
      "DATA ANALYST",
      "SALES",
      "INFRASTRUCTURE",
      "GAP ANALYSIS",
      "FLEXIBLE",
      "TECHNICAL SKILLS",
    ],
    personal_information: {
      address: "Koramangala",
      city: "Bangalore",
      email: "arghyapolley@gmail.com",
      first_name: "ARGHYA",
      github: "",
      kaggle: "",
      last_name: "POLLEY",
      linkedin: "",
      medium: "",
      phone: "9611412793",
      zipcode: "560047",
    },
    professional_experience: [
      {
        company: "Webfosys Networks Pvt. Ltd",
        end_date: "30-Sep-2016",
        job_title: "Website Developer",
        location: "Bangalore, India",
        responsibilities: [
          "Building an interactive website which will able to show the data that comes from the IOT connected smart meter. Also connect this website with the server which will help to fetch the data also store data into the server later which can be used to analyze the customers usage pattern.",
        ],
        start_date: "01-Jul-2015",
      },
      {
        company: "SIT Projects",
        end_date: "31-Mar-2017",
        job_title: "Application Manager",
        location: "Bangalore, India",
        responsibilities: [
          "Building an dynamic website to showcase the expected outcome of the renewable energy production by analysing the predictive analysis to help to optimize the business process of the co.",
        ],
        start_date: "01-Nov-2016",
      },
      {
        company: "Davanam Sarovar Portico",
        end_date: "None",
        job_title: "UI Developer",
        location: "None",
        responsibilities: [
          "Performed extensive GAP analysis in the project as there were numerous 'As-Is' and 'To-Be' conditions.",
          "Building, publishing customized interactive reports and dashboards, report scheduling using Tableau server.",
          "Created action filters, parameters and calculated sets for preparing dashboards and worksheets in Tableau.",
          "Restricted data for particular users using Row level security and User filters.",
          "Developed Tableau visualizations and dashboards using Tableau Desktop.",
          "Built dashboards for measures with forecast, trend line and reference lines.",
        ],
        start_date: "None",
      },
    ],
    research_and_publications: null,
    skills: [
      "1.8 years of rich experience in Website Development using – HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "bootstrap",
      "angular 2",
      "node.js.",
      "Languages of interest: JavaScript",
      "Python.",
      "Database used: MySQL.",
      "Markup Languages/Web Designing Languages: HTML5",
      "CSS3.",
      "Tools/Frameworks/Library used: Angular 2",
      "Node.js",
      "Tableau",
      "Bootstrap",
      "jQuery.",
      "Tools and Technologies HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "AJAX",
      "Java",
      "Ability to adapt in any condition",
      "Ability to communicate with people",
      "Positive thinking",
    ],
    summary_and_objective: [
      "CAREER OBJECTIVE",
      "To work in an organization that will give me a platform to utilize my skills and enrich my knowledge in the process to achieve companys goals with my initiative and skills.",
      "CAREER SYNOPSIS",
      "Hands-on knowledge on  Data Visualization using Tableau tool.",
      " Confident, articulate, and professional communication abilities with a proven aptitude to establish genuine rapport with prospects and clients.",
      " Worked with clients like Consumer Durable, Reality, Retail and Automobiles sector.",
      "TECHNICAL SKILLS",
      "PROFESSIONAL EXPERIENCE",
      "I hereby declare that the information above is true to the best of my knowledge and I will not leave any stone unturned to execute the responsibility entrusted upon me. I am also confident of my ability to work in a team.",
      "Date",
    ],
    total_experience: 1.66,
    status: "success",
  },
};

export default function Page() {
  return (
    <div style={{ padding: "6px 36px" }}>
      <Row gutter={24}>
        <Col span={24}>
          <Header />
        </Col>
        <br/><br/>
        <Col span={24}>
          <Document item={item} />
        </Col>
      </Row>
    </div>
  );
}
