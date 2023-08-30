import { useEffect, useState } from 'react';
import { Octokit } from 'octokit';

const token = process.env.PRIVATE_ACCESS_TOKEN;

const octokit = new Octokit({
  baseURL: `https://api.github.com/repos/`,
  auth: token,
});

const useOctokit = (owner, repo, issueNumber, state, sortCondition, direction, perPage, page) => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cancelError = () => {
    setError(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;

        if (issueNumber) {
          response = await octokit.request('GET /repos/:owner/:repo/issues/:issue_number', {
            owner,
            repo,
            issue_number: issueNumber,
          });

          setIssues(response.data);
        } else {
          response = await octokit.request('GET /repos/:owner/:repo/issues', {
            owner,
            repo,
            state,
            sort: sortCondition,
            direction,
            per_page: perPage,
            page,
          });

          setIssues(prevIssues => [...prevIssues, ...response.data]);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [owner, repo, issueNumber, state, sortCondition, direction, perPage, page]);

  return { issues, loading, error, cancelError };
};

export default useOctokit;
