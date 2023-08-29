import { axiosClient } from './axios';

export const getIssue = async (owner, repo) => {
  try {
    const response = await axiosClient.get(`${owner}/${repo}/issues`, {
      state: 'open',
    });

    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, data: error };
  }
};
