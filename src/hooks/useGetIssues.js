import { useEffect, useState } from 'react';
import { fetchIssue } from '../api/function';

const useGetIssues = (owner, repo, issueNumber, state, sortCondition, direction, perPage, page) => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cancelError = () => {
    setError(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchIssue(
          owner,
          repo,
          issueNumber,
          state,
          sortCondition,
          direction,
          perPage,
          page,
        );

        if (result.success) {
          if (issueNumber) {
            setIssues([result.data]);
          } else {
            setIssues(prevIssues => [...prevIssues, ...result.data]);
          }
        } else {
          setError(result.data);
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

export default useGetIssues;
