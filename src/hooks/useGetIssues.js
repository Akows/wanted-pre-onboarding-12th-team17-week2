import { useEffect, useState } from 'react';
import { fetchIssue } from '../api/function';

const useGetIssues = (owner, repo, issueNumber, state, sortConditon, direction, perPage) => {
  const [issue, setIssue] = useState([]);
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cancelError = () => {
    setError(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (issueNumber) {
          const result = await fetchIssue(owner, repo, issueNumber, null, null, null, null);
          if (result.success) {
            setIssue(result.data);
          } else {
            setError(result.data);
          }
        } else {
          const result = await fetchIssue(
            owner,
            repo,
            null,
            state,
            sortConditon,
            direction,
            perPage,
          );
          if (result.success) {
            setIssues(result.data);
          } else {
            setError(result.data);
          }
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [owner, repo, issueNumber, state, sortConditon, direction, perPage]);

  return { issue, issues, loading, error, cancelError };
};

export default useGetIssues;
