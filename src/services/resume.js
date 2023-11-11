import axios from 'axios';

const MAX_CALLS = 1;
const callsCount = [];

const API_PATH = 'https://api.cvviz.com';
// Replace YOUR_BEARER_TOKEN with your actual bearer token
let bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjp7InNldHRpZCI6Ijc3OCIsInNlcnRpZCI6Ijg0OCIsIm5hbWUiOiJTYXR5YSAgSmFnYW5rYXIiLCJlbWFpbCI6InNhdHlhd2FuLmphZ2Fua2FyQGN2dml6LmNvbSIsInJlcGx5X3RvX2xhYmVsIjoiU2F0eWEgSiAoIENWVmlaIEFjYyApIiwicmVwbHlfdG9fZW1haWwiOiJzYXR5YV90ZXN0XzM4YTdkNkBlbWFpbC5jdnZpei5jb20iLCJwZXJtaXNzaW9ucyI6bnVsbCwiY29tcGFueV9uYW1lIjoiSW52b2ljZVRlc3QiLCJjb21wYW55X3R5cGUiOiJTIn19.Sz01s3BIeNK31q7EO6_e0XvxMY96eWvjhZayCLjLnaA';
import {useAuth} from '@/utils/hooks';

const {token} = useAuth();


export async function uploadFiles(params) {
  // const formData = new FormData();

  // // Append each file to the FormData object
  // params.forEach(file => {
  //   formData.append('file', file);
  // });

  // console.log('params', params);

  // console.log('formData files 22', params.get('files[]'));



  // return params;

  const response = await fetch(`${API_PATH}/test/files/resumes`, {
    method: 'POST',
    body: params,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}


// export async function uploadFiles(params) {
//   return axios.post(`${API_PATH}/test/files/resumes`, params, {
//     headers: { 'X-Requested-With': 'XMLHttpRequest' },
//     headers: { 'Content-Type': 'multipart/form-data' },
//   });
// }




export async function getBulkParseRequest(request_id) {
    // return {
    //     "status": "success",
    //     "data": [
    //         {
    //             "id": 283165,
    //             "job_name": "single_candidate_upload",
    //             "current_progress": 10,
    //             "is_complete": true,
    //             "linked_account_id": 25,
    //             "parsed_data": null
    //         },
    //         {
    //             "id": 283166,
    //             "job_name": "single_candidate_upload",
    //             "current_progress": 10,
    //             "is_complete": true,
    //             "linked_account_id": 25,
    //             "parsed_data": null
    //         },
    //         {
    //             "id": 283167,
    //             "job_name": "single_candidate_upload",
    //             "current_progress": 10,
    //             "is_complete": true,
    //             "linked_account_id": 25,
    //             "parsed_data": null
    //         }
    //     ],
    //     "errors": []
    // };
    
    
    const response = await fetch(`${API_PATH}/test/resumes/parser/child_jobs/${request_id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
  
    return response.json();
  }



export async function advanceParseRequest(params) {
  
    // return {
    //     "status": "success",
    //     "data": {
    //         "job_name": "single_candidate_upload",
    //         "is_complete": true,
    //         "has_failed": false,
    //         "failure_reason": null,
    //         "parsed_data": {
    //             "achievements": [
    //                 {
    //                     "event": "2015",
    //                     "name": "Recipient of ‘Employee of the month’ award @ Webfosys",
    //                     "year": "None"
    //                 },
    //                 {
    //                     "event": "None",
    //                     "name": "Consistently recognized for demonstrating effective technical skills & accomplishing projects on tight schedules",
    //                     "year": "None"
    //                 },
    //                 {
    //                     "event": "None",
    //                     "name": "Came 1st in inter school drawing competition held in Hooghly, West Bengal",
    //                     "year": "None"
    //                 },
    //                 {
    //                     "event": "None",
    //                     "name": "Got 1st division in Bangiya Sangeet Parishad Passed Bratachari Kendrya",
    //                     "year": "None"
    //                 }
    //             ],
    //             "activities": "Nayakmandali held in Netaji Indoor Stadium, Kolkata.\n• Organized technical and cultural activities at school and college level.\n• Participated in ROBOTICS and CODING event in tech fest of various engineering colleges.",
    //             "education": [
    //                 {
    //                     "degree": "B.Tech.",
    //                     "end_date": "31-Dec-2013",
    //                     "gpa_grade": "64.7",
    //                     "institution": "Institute of Technology And Marine Engineering",
    //                     "major": "Electronics & Communication",
    //                     "rank": "",
    //                     "start_date": "01-Jan-2013"
    //                 },
    //                 {
    //                     "degree": "",
    //                     "end_date": "",
    //                     "gpa_grade": "",
    //                     "institution": "",
    //                     "major": "",
    //                     "rank": "",
    //                     "start_date": ""
    //                 }
    //             ],
    //             "inferred_skills": [
    //                 "R",
    //                 "HTML5",
    //                 "AGILE",
    //                 "DATA VISUALIZATION",
    //                 "COMMUNICATION",
    //                 "ANGULARJS",
    //                 "MONITORING",
    //                 "IOT",
    //                 "SECURITY",
    //                 "DASHBOARDS",
    //                 "UI",
    //                 "DIGITAL MARKETING",
    //                 "PREDICTIVE ANALYSIS",
    //                 "DATA ANALYST",
    //                 "SALES",
    //                 "INFRASTRUCTURE",
    //                 "GAP ANALYSIS",
    //                 "FLEXIBLE",
    //                 "TECHNICAL SKILLS"
    //             ],
    //             "personal_information": {
    //                 "address": "Koramangala",
    //                 "city": "Bangalore",
    //                 "email": "arghyapolley@gmail.com",
    //                 "first_name": "ARGHYA",
    //                 "github": "",
    //                 "kaggle": "",
    //                 "last_name": "POLLEY",
    //                 "linkedin": "",
    //                 "medium": "",
    //                 "phone": "9611412793",
    //                 "zipcode": "560047"
    //             },
    //             "professional_experience": [
    //                 {
    //                     "company": "Webfosys Networks Pvt. Ltd",
    //                     "end_date": "30-Sep-2016",
    //                     "job_title": "Website Developer",
    //                     "location": "Bangalore, India",
    //                     "responsibilities": [
    //                         "Building an interactive website which will able to show the data that comes from the IOT connected smart meter. Also connect this website with the server which will help to fetch the data also store data into the server later which can be used to analyze the customers usage pattern."
    //                     ],
    //                     "start_date": "01-Jul-2015"
    //                 },
    //                 {
    //                     "company": "SIT Projects",
    //                     "end_date": "31-Mar-2017",
    //                     "job_title": "Application Manager",
    //                     "location": "Bangalore, India",
    //                     "responsibilities": [
    //                         "Building an dynamic website to showcase the expected outcome of the renewable energy production by analysing the predictive analysis to help to optimize the business process of the co."
    //                     ],
    //                     "start_date": "01-Nov-2016"
    //                 },
    //                 {
    //                     "company": "Davanam Sarovar Portico",
    //                     "end_date": "None",
    //                     "job_title": "UI Developer",
    //                     "location": "None",
    //                     "responsibilities": [
    //                         "Performed extensive GAP analysis in the project as there were numerous 'As-Is' and 'To-Be' conditions.",
    //                         "Building, publishing customized interactive reports and dashboards, report scheduling using Tableau server.",
    //                         "Created action filters, parameters and calculated sets for preparing dashboards and worksheets in Tableau.",
    //                         "Restricted data for particular users using Row level security and User filters.",
    //                         "Developed Tableau visualizations and dashboards using Tableau Desktop.",
    //                         "Built dashboards for measures with forecast, trend line and reference lines."
    //                     ],
    //                     "start_date": "None"
    //                 }
    //             ],
    //             "research_and_publications": null,
    //             "skills": [
    //                 "1.8 years of rich experience in Website Development using – HTML5",
    //                 "CSS3",
    //                 "JavaScript",
    //                 "jQuery",
    //                 "bootstrap",
    //                 "angular 2",
    //                 "node.js.",
    //                 "Languages of interest: JavaScript",
    //                 "Python.",
    //                 "Database used: MySQL.",
    //                 "Markup Languages/Web Designing Languages: HTML5",
    //                 "CSS3.",
    //                 "Tools/Frameworks/Library used: Angular 2",
    //                 "Node.js",
    //                 "Tableau",
    //                 "Bootstrap",
    //                 "jQuery.",
    //                 "Tools and Technologies HTML5",
    //                 "CSS3",
    //                 "JavaScript",
    //                 "jQuery",
    //                 "AJAX",
    //                 "Java",
    //                 "Ability to adapt in any condition",
    //                 "Ability to communicate with people",
    //                 "Positive thinking"
    //             ],
    //             "summary_and_objective": [
    //                 "CAREER OBJECTIVE",
    //                 "To work in an organization that will give me a platform to utilize my skills and enrich my knowledge in the process to achieve companys goals with my initiative and skills.",
    //                 "CAREER SYNOPSIS",
    //                 "Hands-on knowledge on  Data Visualization using Tableau tool.",
    //                 " Confident, articulate, and professional communication abilities with a proven aptitude to establish genuine rapport with prospects and clients.",
    //                 " Worked with clients like Consumer Durable, Reality, Retail and Automobiles sector.",
    //                 "TECHNICAL SKILLS",
    //                 "PROFESSIONAL EXPERIENCE",
    //                 "I hereby declare that the information above is true to the best of my knowledge and I will not leave any stone unturned to execute the responsibility entrusted upon me. I am also confident of my ability to work in a team.",
    //                 "Date"
    //             ],
    //             "total_experience": 1.66,
    //             "status": "success"
    //         }
    //     },
    //     "errors": []
    // };
  
    
    const response = await fetch(`${API_PATH}/test/resumes/parser_request/${params.request_id}`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${bearerToken}`,
    },
    body: JSON.stringify(params),
  });
  
  //add params.request_id to response
  response.request_id = params.request_id;
  return response.json();
}

export async function getParseRequest(params) {
  const response = await fetch(`${API_PATH}/resumes/parser/${params.request_id}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${bearerToken}`,
    },
  });
  
  return response;
}

export async function advanceParse(params) {
  const response = await fetch(`${API_PATH}/resumes/parser/realtime`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${bearerToken}`,
    },
    body: params,
  });
  
  return response;
}

// export async function advanceBulkParse(params) {
//     const response = await fetch(`${API_PATH}/test/parser/background_bulk`, {
//       method: 'POST',
//       body: JSON.stringify(params),
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${bearerToken}`,
//       },
//     });
  
//     return response.json();
//   }


  export async function advanceBulkParse(params) {

    // return {
    //     "status": "Success",
    //     "data": {
    //         "message": "Candidate upload initiated",
    //         "request_id": 283164,
    //         "child_request_ids": [
    //             283165,
    //             283166,
    //             283167
    //         ]
    //     }
    // };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${bearerToken}`,
      },
      body: JSON.stringify(params),
    };
  
    try {
      const response = await fetch(
        `${API_PATH}/test/parser/background_bulk`,
        options
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
  



export async function advanceParseBg(params) {
  const response = await fetch(`${API_PATH}/resumes/parser/background`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${bearerToken}`,
    },
    body: params,
  });
  
  return response;
}
