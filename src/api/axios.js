import axios from 'axios';

const token = process.env.PRIVATE_ACCESS_TOKEN;

export const axiosClient = axios.create({
  baseURL: `https://api.github.com/repos/`,
  auth: token,
});
