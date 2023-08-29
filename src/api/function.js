import { axiosClient } from './axios';

export const fetchIssue = async (
  owner,
  repo,
  issueNumber,
  state,
  sortCondition,
  direction,
  perPage,
  page,
) => {
  try {
    let url = `${owner}/${repo}/issues`;

    if (issueNumber) {
      url += `/${issueNumber}`;
    }

    // param?
    // RESTful API의 일반적인 규칙 중 하나, 라이브러리가 이들 매개변수를 URL에 적절하게 인코딩하여 생성해준다.
    // 그렇지 않을 경우 인코딩 문제로 제대로 된 호출 URL이 완성되지 않는다.
    const params = {};

    if (issueNumber === null) {
      params.state = state;
      params.sort = sortCondition;
      params.direction = direction;
      params.per_page = perPage;
      params.page = page;
    }

    const response = await axiosClient.get(url, {
      params: params,
    });

    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, data: error };
  }
};
