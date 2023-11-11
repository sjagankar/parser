// const API_PATH = 'https://api.staging.skima.ai/connect/api/v1';
const API_PATH = "https://api.cvviz.com";
import { useAuth } from "@/utils/hooks";
//const {token} = useAuth();

export async function register(params) {
  const response = await fetch(`${API_PATH}/parser/register`, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

export async function login(params) {
  const response = await fetch(`${API_PATH}/parser/login`, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
}

export async function usage(params) {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_PATH}/parser/usage`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
}

export async function createApiKey(params) {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_PATH}/parser/api_keys`, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
}

export async function fetchApiKeys() {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_PATH}/parser/api_keys`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
}

export async function bulkParse(params) {
  const token = localStorage.getItem("token");
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(params),
  };

  try {
    const response = await fetch(`${API_PATH}/parser/background_bulk`, options);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
}

export async function getChildJobs(request_id) {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_PATH}/parser/child_jobs/${request_id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.json();
}

export async function parseRequest(params) {
  const token = localStorage.getItem("token");
  const response = await fetch(
    `${API_PATH}/parser/request/${params.request_id}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(params),
    }
  );

  //add params.request_id to response
  response.request_id = params.request_id;
  return response.json();
}

export async function redeemCode(params) {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_PATH}/parser/redeem_appsumo_code/${params.appsumo_code}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(params),
  });

  //add params.request_id to response
  response.request_id = params.request_id;
  return response.json();
}

export async function activateAccount(params) {
  const response = await fetch(`${API_PATH}/parser/activate/${params.activation_key}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(params),
  });

  //add params.request_id to response
  response.request_id = params.request_id;
  return response.json();
}



