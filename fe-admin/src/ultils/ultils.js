import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:5001/be-group10/us-central1/app/',
  timeout: 5000,
  // headers: { 'X-Access-Token': 'accessToken' }
});