import axios from 'axios';

const API = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  params: {
    apikey: process.env.VUE_APP_API_KEY
  }
});

export { API };
