import { axiosClient } from './axios';

export const getIssue = async (owner, repo, state, sortConditon, direction, perPage) => {
  try {
    const response = await axiosClient.get(`${owner}/${repo}/issues`, {
      // Git REAT API params.
      // Open 여부, 정렬 순서, 오름차/내림차순, 가져올 데이터 갯수.
      params: {
        state: state,
        sort: sortConditon,
        direction: direction,
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
