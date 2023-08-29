import { useEffect, useState } from 'react';
import { getIssue } from '../api/function';

const useGetIssues = (owner, repo, perPage) => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getIssue(owner, repo, perPage);

        console.log(result);

        if (result.success) {
          const sortResult = result.data.sort((a, b) => b.comments - a.comments);

          setIssues(sortResult);
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

  return { issues, loading, error };
};

export default useGetIssues;
