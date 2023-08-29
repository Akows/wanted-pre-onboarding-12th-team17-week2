import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useGetIssues from '../hooks/useGetIssues';
import Loading from './Loading';

const ListForm = styled.ul`
  list-style: none;
  padding: 0;
`;

const IssueItemLabel = styled.li`
  padding: 10px;
  background-color: #fff;
  margin: 5px 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: space-between;

  text-align: center;

  @media (max-width: 768px) {
    display: none;
  }
`;
const IssueItem = styled.li`
  padding: 10px;
  background-color: #fff;
  margin: 5px 0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: space-between;

  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
`;

const Number = styled.strong`
  flex: 1;
`;

const Title = styled.p`
  flex: 5;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const Writer = styled.span`
  flex: 2;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const CreatedTime = styled.span`
  flex: 2.5;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Comments = styled.span`
  flex: 1;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const IssueList = ({ owner, repo }) => {
  const { issues, loading, error } = useGetIssues(owner, repo, 'open', 'comments', 'desc', 10);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <ListForm>
        <IssueItemLabel>
          <Number>
            <b>이슈 번호</b>
          </Number>
          <Title>
            <b>이슈 제목</b>
          </Title>
          <Writer>
            <b>작성자</b>
          </Writer>
          <CreatedTime>
            <b>작성일</b>
          </CreatedTime>
          <Comments>
            <b>코멘트수</b>
          </Comments>
        </IssueItemLabel>

        {issues.map((issue, index) => (
          <React.Fragment key={issue.id}>
            {index % 4 === 0 && index !== 0 && (
              <Link to="https://www.wanted.co.kr/" rel="noopener noreferrer">
                <IssueItem>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100%',
                      width: '100%',
                    }}
                  >
                    <img
                      src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
                      alt="Wanted Logo"
                    />
                  </div>
                </IssueItem>
              </Link>
            )}

            <IssueItem key={issue.id}>
              <Number>{issue.number}</Number>
              <Title>{issue.title}</Title>
              <Writer>{issue.user.login}</Writer>
              <CreatedTime>{issue.created_at}</CreatedTime>
              <Comments>{issue.comments}</Comments>
            </IssueItem>
          </React.Fragment>
        ))}
      </ListForm>
    );
  }
};

export default IssueList;
