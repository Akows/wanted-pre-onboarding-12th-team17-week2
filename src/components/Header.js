import React from 'react';
import styled from 'styled-components';
import { checkSessionStorageValues } from '../utils/storageFunction';

const Title = styled.div`
  font-size: 32px;
  font-weight: bolder;
`;

const Header = () => {
  const { storedOwner, storedRepo } = checkSessionStorageValues();
  return (
    <Title>
      {storedOwner} / {storedRepo}
    </Title>
  );
};

export default Header;
