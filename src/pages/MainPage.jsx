import React from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f4;
`;

const Header = styled.div`
  font-size: 32px;
  font-weight: bolder;
`;

const IssueList = styled.ul`
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

const MainPage = () => {
  const owner = 'facebook';
  const repo = 'react';

  return (
    <AppWrapper>
      <Header>
        {owner} / {repo}
      </Header>

      <IssueList>
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
            <b>이슈 등록 시간</b>
          </CreatedTime>
          <Comments>
            <b>댓글 갯수</b>
          </Comments>
        </IssueItemLabel>

        <IssueItem>
          <Number>번호</Number>
          <Title>제목</Title>
          <Writer>작성자</Writer>
          <CreatedTime>이슈 등록 시간</CreatedTime>
          <Comments>댓글 갯수</Comments>
        </IssueItem>
      </IssueList>
    </AppWrapper>
  );
};

export default MainPage;
