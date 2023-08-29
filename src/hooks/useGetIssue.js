import { useEffect, useState } from 'react';
import { getIssue } from '../api/function';

const useGetIssue = (owner, repo, state, sortConditon, direction, issueNumber) => {
  const [issue, setIssue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cancelError = () => {
    setError(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getIssue(owner, repo, state, sortConditon, direction, issueNumber);

        if (result.success) {
          setIssue(result.data);
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
  }, [owner, repo]);

  return { issue, loading, error, cancelError };
};

export default useGetIssue;
