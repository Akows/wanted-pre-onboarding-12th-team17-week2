import { axiosClient } from './axios';

export const getIssue = async (owner, repo, perPage) => {
  try {
    const response = await axiosClient.get(`${owner}/${repo}/issues`, {
      params: {
        state: 'open',
        per_page: perPage,
      },
    });

    // param?
    // RESTful API의 일반적인 규칙 중 하나, 라이브러리가 이들 매개변수를 URL에 적절하게 인코딩하여 생성해준다.
    // 그렇지 않을 경우 인코딩 문제로 제대로 된 호출 URL이 완성되지 않는다.

    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, data: error };
  }
};
