// const API_PATH = 'https://api.staging.skima.ai/connect/api/v1';
const API_PATH = 'https://api.cvviz.com/';


const TOKEN =
  'd188d164bf9933547abe35a71aa3dd4dd2b3b3c2d4f8dfa7007b72dfb28cbc3b';

export async function backgroundParse(params) {
  const response = await fetch(`${API_PATH}/parser/background`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return response.json();
}

export async function status(id) {
  const response = await fetch(`${API_PATH}/request/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return response.json();
}

export async function realTime(params) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(params),
  };

  try {
    const response = await fetch(
      `${API_PATH}/test/parser/realtime`,
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


export async function parseJob(params) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(params),
  };

  try {
    const response = await fetch(
      `${API_PATH}/test/parser/job`,
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

