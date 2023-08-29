import { useEffect, useState } from 'react';
import { getIssue, getIssues } from '../api/function';

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
          const result = await getIssue(owner, repo, issueNumber);
          if (result.success) {
            setIssue(result.data);
          } else {
            setError(result.data);
          }
        } else {
          const result = await getIssues(owner, repo, state, sortConditon, direction, perPage);
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
