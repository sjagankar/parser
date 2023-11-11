import React from "react";
import { Button, Tabs } from "antd";
import List from "./List";
import {useNavigate} from 'umi';


const data1 = [
  {
    key: "1",
    name: "John_Doe_resume.pdf",
    email : "john_doe@gmail.com",
    phone : "1234567890",
    position: "Software Engineer",
    experience: "5 years",
    resume: "https://example.com/resume1.pdf",
    is_complete: false,
  },
  {
    key: "2",
    name: "Jane_Smith_resume.docx",
    email : "jane_smith@gmail.com",
    phone : "1234567890",
    position: "Frontend Developer",
    experience: "3 years",
    resume: "https://example.com/resume2.pdf",
    is_complete:false,
  },
  {
    key: "1",
    name: "John_Doe_resume.pdf",
    email : "john_doe@gmail.com",
    phone : "1234567890",
    position: "Software Engineer",
    experience: "5 years",
    resume: "https://example.com/resume1.pdf",
    is_complete: true,
  },
  {
    key: "2",
    name: "Jane_Smith_resume.docx",
    email : "jane_smith@gmail.com",
    phone : "1234567890",
    position: "Frontend Developer",
    experience: "3 years",
    resume: "https://example.com/resume2.pdf",
    is_complete: true,
  },
// Add more data as needed
];

const data2 = [
  {
    key: "1",
    name: "John_Doe_resume.pdf",
    email : "john_doe@gmail.com",
    phone : "1234567890",
    position: "Software Engineer",
    experience: "5 years",
    resume: "https://example.com/resume1.pdf",
    is_complete: true,
  },
  {
    key: "2",
    name: "Jane_Smith_resume.docx",
    email : "jane_smith@gmail.com",
    phone : "1234567890",
    position: "Frontend Developer",
    experience: "3 years",
    resume: "https://example.com/resume2.pdf",
    is_complete: true,
  },
// Add more data as needed
];

const data3 = [
  {
    key: "1",
    name: "John_Doe_resume.pdf",
    email : "john_doe@gmail.com",
    phone : "1234567890",
    position: "Software Engineer",
    experience: "5 years",
    resume: "https://example.com/resume1.pdf",
    is_complete: true,
  },
// Add more data as needed
];



const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "All Documents (4)",
    children: <List  data={data1}/>,
  },
  {
    key: "2",
    label: "Completed (2)",
    children: <List data={data2}/>,
  },
  {
    key: "3",
    label: "Archived (1)",
    children: <List data={data3}/>,
  },
];
const DocumentTabs = () => {
  let navigate = useNavigate();

  return(
  <Tabs type="card" defaultActiveKey="1" items={items} onChange={onChange} tabBarExtraContent={
    <Button type="primary" onClick={
      () => {
        navigate("/documents/add", { replace: true });
      }
    }>
      Add Documents
    </Button>
  }/>
)};
export default DocumentTabs;
