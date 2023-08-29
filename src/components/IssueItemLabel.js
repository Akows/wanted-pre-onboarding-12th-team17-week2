import React from 'react';
import styled from 'styled-components';

const ItemLabel = styled.li`
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
const IssueItemLabel = () => {
  return (
    <ItemLabel>
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
    </ItemLabel>
  );
};

export default IssueItemLabel;
