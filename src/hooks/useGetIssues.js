import { useEffect, useState } from 'react';
import { getIssue } from '../api/function';

const useGetIssues = (owner, repo, state, sortConditon, direction, perPage) => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cancelError = () => {
    setError(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getIssue(owner, repo, state, sortConditon, direction, perPage);

        if (result.success) {
          setIssues(result.data);
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

  return { issues, loading, error, cancelError };
};

export default useGetIssues;
