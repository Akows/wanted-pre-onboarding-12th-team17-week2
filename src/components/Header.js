import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-size: 32px;
  font-weight: bolder;
`;

const Header = ({ owner, repo }) => {
  return (
    <Title>
      {owner} / {repo}
    </Title>
  );
};

export default Header;
