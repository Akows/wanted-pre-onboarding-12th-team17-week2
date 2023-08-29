import React from 'react';
import { useParams } from 'react-router-dom';

export const IssueItemPage = () => {
  const { issueid } = useParams();

  console.log(issueid);

  return (
    <div>
      <h1>Issue 상세 페이지</h1>
    </div>
  );
};
