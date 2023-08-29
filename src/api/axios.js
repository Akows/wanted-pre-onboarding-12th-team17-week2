import axios from 'axios';

const token = process.env.PRIVATE_ACCESS_TOKEN;

export const axiosClient = axios.create({
  baseURL: `https://api.github.com/repos/`,
  headers: {
    Authorization: token,
  },

  // auth: token,
});

// axiosClient.interceptors.request.use(config => {
//   if (token) {
//     config.headers.Authorization = `token ${token}`;
//   }
//   return config;
// });
