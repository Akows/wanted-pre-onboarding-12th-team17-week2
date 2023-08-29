import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useGetIssue from '../hooks/useGetIssue';
import { checkSessionStorageValues } from '../utils/storageFunction';
import ReactMarkdown from 'react-markdown';
import Loading from '../components/Loading';
import Error from '../components/Error';

const Container = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const IssueNumber = styled.span`
  font-weight: bold;
`;

const Title = styled.h2`
  margin-top: 10px;
`;

const Author = styled.p`
  margin-top: 5px;
`;

const Date = styled.p`
  margin-top: 5px;
`;

const Comments = styled.p`
  margin-top: 5px;
`;

const Body = styled.div`
  margin-top: 20px;
`;

export const IssueItemPage = () => {
  const { issueNumber } = useParams();

  const { storedOwner, storedRepo } = checkSessionStorageValues();

  const { issue, loading, error, cancelError } = useGetIssue(
    storedOwner,
    storedRepo,
    'open',
    'comments',
    'desc',
    issueNumber,
  );

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error error={error} cancelError={cancelError} />;
  } else {
    return (
      <div>
        <h1>Issue 상세 페이지</h1>
        <Container>
          <Avatar src={issue.user?.avatar_url} alt="User Avatar" />
          <IssueNumber>이슈 번호: {issue.number}</IssueNumber>
          <Title>{issue.title}</Title>
          <Author>작성자: {issue.user?.login}</Author>
          <Date>작성날짜: {issue.created_at}</Date>
          <Comments>코멘트 수: {issue.comments}</Comments>
          <Body>
            <ReactMarkdown children={issue.body} />
          </Body>
        </Container>
      </div>
    );
  }
};
