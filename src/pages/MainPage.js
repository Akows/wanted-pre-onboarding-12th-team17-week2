import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import IssueList from '../components/IssueList';

const AppWrapper = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f4;
`;

const MainPage = () => {
  const owner = 'facebook';
  const repo = 'react';

  useEffect(() => {
    sessionStorage.setItem('owner', owner);
    sessionStorage.setItem('repo', repo);
  }, []);

  return (
    <AppWrapper>
      <Header />

      <IssueList />
    </AppWrapper>
  );
};

export default MainPage;
