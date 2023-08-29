import React from 'react';
import styled from 'styled-components';

const ErrorModalBorder = styled.div`
  width: 100vw;
  height: 100vh;

  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  position: absolute;

  z-index: 999;

  background-color: rgba(0, 0, 0, 0.5);
`;

const ErrorInnerContents = styled.div`
  width: 500px;
  height: 500px;

  margin-top: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 2px solid black;
  border-radius: 20px;

  background-color: #d2d2d2;

  opacity: 0.9;

  @media screen and (max-width: 500px) {
    width: 95%;
  }
  @media screen and (max-width: 300px) {
    margin-top: -70px;
  }
`;

const ErrorTitle = styled.div`
  width: 90%;
  height: 20%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: black;
  font-size: 32px;
`;
const ErrorInfo = styled.div`
  width: 90%;
  height: 50px;

  text-align: center;

  color: black;
  font-size: 24px;
`;
const ErrorButton = styled.div`
  width: 50%;
  height: 60px;

  &:hover {
    color: white;
    background-color: black;
  }

  & > button {
    width: 100%;
    height: 100%;

    border: none;
    border-radius: 10px;

    color: black;
    font-family: 'GIFont';
    font-size: 20px;
  }
`;

const Error = ({ error, cancelError }) => {
  return (
    <ErrorModalBorder>
      <ErrorInnerContents>
        <ErrorTitle>에러가 발생하였습니다.</ErrorTitle>

        <ErrorInfo>{error.code}</ErrorInfo>
        <ErrorInfo>{error.message}</ErrorInfo>

        <ErrorButton>
          <button onClick={cancelError}>확인</button>
        </ErrorButton>
      </ErrorInnerContents>
    </ErrorModalBorder>
  );
};

export default Error;
