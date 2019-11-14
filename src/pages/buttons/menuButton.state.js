import React from 'react';
import styled from 'styled-components';

import { MenuButtons } from 'synapsefi-dev-ui';


const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MenuButtonContainer = () => {
  return (
    <MenuContainer>
      <MenuButtons
        data={
          [
            { key: 'one', text: 'One', onClick: () => alert('one') },
            { key: 'two', text: 'Two', onClick: () => alert('two') },
          ]
        }
      />
    </MenuContainer>
  )
}

export default MenuButtonContainer;
