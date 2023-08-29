import React from 'react';
import styled from 'styled-components';

const BackGround = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;

  top: 0;
  left: 0;

  z-index: 999;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgba(65, 71, 89, 0.8);

  & > p {
    font-size: 64px;
  }
`;

const Loading = () => {
  return (
    <BackGround>
      <p>Loading...</p>
    </BackGround>
  );
};
export default Loading;
