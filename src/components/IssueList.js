import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useGetIssues from '../hooks/useGetIssues';
import useOctokit from '../hooks/useOctokit';
import { checkSessionStorageValues } from '../utils/storageFunction';
import Error from './Error';
import Header from './Header';
import IssueItemLabel from './IssueItemLabel';
import Loading from './Loading';

const ListForm = styled.ul`
  list-style: none;
  padding: 0;
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

const IssueList = () => {
  const [page, setPage] = useState(1); // 현재 페이지
  const [loadingMore, setLoadingMore] = useState(false); // 더 많은 데이터를 불러오는 중인지 여부

  const { storedOwner, storedRepo } = checkSessionStorageValues();

  const issuesPerPage = 20; // 페이지 당 보여줄 데이터 개수

  // 과제 진행중 사용 가능한 라이브러리 목록에 Octokit이 추가되어 커스텀 훅을 하나 새로 생성함.
  // 기존에 사용하던 Axios 방식은 삭제는 하지 않고 주석처리하여 기록으로 남김.
  // const { issues, loading, error, cancelError } = useGetIssues(
  //   storedOwner,
  //   storedRepo,
  //   null,
  //   'open',
  //   'comments',
  //   'desc',
  //   issuesPerPage,
  //   page,
  // );

  const { issues, loading, error, cancelError } = useOctokit(
    storedOwner,
    storedRepo,
    null,
    'open',
    'comments',
    'desc',
    issuesPerPage,
    page,
  );

  useEffect(() => {
    if (loadingMore) return; // 이미 로딩 중이거나 마지막 페이지에 도달했다면 중복 호출 방지

    const handleScroll = () => {
      if (
        !loadingMore &&
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight
      ) {
        setLoadingMore(true);
        setPage(prevPage => prevPage + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadingMore]);

  useEffect(() => {
    if (loadingMore) {
      // 새로운 데이터를 불러오는 비동기 작업 수행
      // 예를 들어, useGetIssues 함수를 사용해서 데이터를 가져오고, 가져온 데이터를 현재 issues 배열에 추가
      setLoadingMore(false); // 로딩 상태 변경
    }
  }, [loadingMore]);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error error={error} cancelError={cancelError} />;
  } else {
    return (
      <>
        <Header />

        <ListForm>
          <IssueItemLabel />

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
                        width="110"
                        height="39"
                      />
                    </div>
                  </IssueItem>
                </Link>
              )}

              <Link to={{ pathname: `/issueitem/${issue.number}` }}>
                <IssueItem key={issue.id}>
                  <Number>{issue.number}</Number>
                  <Title>{issue.title}</Title>
                  <Writer>{issue.user.login}</Writer>
                  <CreatedTime>{issue.created_at}</CreatedTime>
                  <Comments>{issue.comments}</Comments>
                </IssueItem>
              </Link>
            </React.Fragment>
          ))}
        </ListForm>
      </>
    );
  }
};

export default IssueList;
