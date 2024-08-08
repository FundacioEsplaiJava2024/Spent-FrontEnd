import axios from 'axios';


const SpentApi = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, PATCH'
    },
  });

export default SpentApi;