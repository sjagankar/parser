/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
//import axios from 'axios';

export function getSettings(id) {
  return fetch(`/api/career/employers/${id}/settings`).then((res) => res.json());
}


export async function getSettingsByCustomer(id) {
  return fetch(`/api/career/customers/${id}/settings`).then((res) => res.json());
}


export async function getEmployerJobs(id,pagination, filters) {
  const url = new URL(`${window.location.origin}/api/career/employers/${id}/jobs`)
  if(pagination.pageSize >=5){
    url.searchParams.append('pageSize',pagination.pageSize)
  }
  if(pagination.page >=1 ){
    url.searchParams.append('page',pagination.page)
  }
  if(filters.showRemoteOnly){
    url.searchParams.append('showRemoteOnly', 1)
  }
  if(filters.city.length > 0){
    url.searchParams.append('location', filters.city.map(i=>i).join(','))
  }
  if(filters.jobtype.length > 0){
    url.searchParams.append('jobtype', filters.jobtype.map(i=>i).join(','))
  }
  if(filters.department.length > 0){
    url.searchParams.append('department', filters.department.map(i=>i).join(','))
  }
  if(filters.department.length > 0){
    url.searchParams.append('department', filters.department.map(i=>i).join(','))
  }
  if(filters.searchvalue.length > 0){
    url.searchParams.append('searchvalue', filters.searchvalue)
  }
  return fetch(url).then((res) => res.json());
}

export async function getAllDepartmentsJobs(id){
  return fetch(`/api/career/employers/${id}/departments`).then((res) => res.json());
}

export async function getAllLocationsJobs(id){
  return fetch(`/api/career/employers/${id}/locations`).then((res) => res.json());
}

export async function getAllJobTypesJobs(id){
  return fetch(`/api/career/employers/${id}/job_types`).then((res) => res.json());
}

export async function getCustomerJobs(id) {
  return fetch(`/api/career/customers/${id}/jobs`).then((res) => res.json());
}

export async function getJob(id) {
  return fetch(`/api/career/job/${id}`).then((res) => res.json());
}


export async function getJobQuestions(settId,id) {
  return fetch(`/api/career/job/${settId}/${id}/screening`).then((res) => res.json());
}

export async function getCustomer(id) {
  return fetch(`/api/career/customer/${id}`).then((res) => res.json());
}

export async function getCandidateScreeningData(id) {
  return fetch(`/api/career/screening/${id}`).then((res) => res.json());
}

export async function applyForJob(formData) {
  return fetch(`/api/career/job/${formData.get('jobId')}/apply`, {
    method: 'POST',
    body: formData,
  }).then((res) => res.json());
}

export async function screeningUpdate(formData) {
  return fetch(`/api/career/screening/${formData.get('candidateId')}/update`, {
    method: 'POST',
    body: formData,
  }).then((res) => res.json());
}

export async function profileUpdate(formData) {
  return fetch(`/api/career/application/${formData.get('candidateId')}/update`, {
    method: 'POST',
    body: formData,
  }).then((res) => res.json());
}

// export async function getSettings(id) {
//   return fetch(`/api/careerpage/settings/${id}`, {
//     method: 'GET'
//   });
// }

export async function getSettingsByCustomerSuffix(id) {
  return fetch(`/api/careerpage/settings_by_customer/${id}`, {
    method: 'GET',
  });
}

export async function getScreeningDetails(id) {
  return fetch(`/api/careerpage/customer/${id}`, {
    method: 'GET',
  });
}

export async function getCandidateDetails(id) {
  return fetch(`/api/screening/candidate/${id}`, {
    method: 'GET',
  });
}

// export async function getSettingsByEmpid() {
//   return fetch(`/api/careerpage/settingsbyemp`, {
//     method: 'GET',
//     headers: getAuthHeader(),
//   });
// }
// export async function getSettingsByVendorToken(params) {
//   return fetch(`/api/careerpage/settingsbyvendor`, {
//     method: 'POST',
//     body: params,
//     headers: getAuthHeader(),
//   });
// }

// export async function updateSettings(params) {
//   return fetch(`/api/careerpage/update`, {
//     method: 'POST',
//     headers: getAuthHeader(),
//     body:params
//   });
// }

export async function updateProfile(params) {
  return fetch(`/api/careerpage/profile/update`, {
    method: 'POST',
    body: params,
  });
}

// export async function applyForJob(params) {
//   return fetch(`/api/careerpage/apply`, {
//     method: 'POST',
//     body: params,
//   });
// }

export async function applyForDiscover(params) {
  return fetch(`/api/careerpage/discoverapply`, {
    method: 'POST',
    body: params,
  });
}


export async function getJobs(params) {
  return fetch(`/api/careerpage/joblist`, {
    method: 'POST',
    body: params,
  });
}

export async function getJobDetails(id) {
  return fetch(`/api/careerpage/jobdetails/${id}`, {
    method: 'GET',
  });
}

export async function getDiscoverQuestions(id) {
  return fetch(`/api/careerpage/screening/${id}`, {
    method: 'GET',
  });
}

// export async function uploadResume(params) {
//   return axios
//     .post(`${FILE_UPLOAD_URL}/careerupload.php`, params, {
//       headers: { "X-Requested-With": "XMLHttpRequest" },
//       headers: { "Content-Type": "application/form-data" }
//     });

// }

