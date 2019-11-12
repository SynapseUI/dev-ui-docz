import React from 'react';
import styled from 'styled-components';

import { DisplayCard, MenuButtons } from 'synapsefi-dev-ui';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(3, 300px);
  grid-auto-rows: 200px;
  grid-auto-columns: 200px;
`;

  const AbsentCardContainer = () => {
    return (
      <GridWrapper>
        <DisplayCard
          title="Regular Title someverylong title i guess"
          isActive
          innerButtonData={{
            text: "+ Create New Account",
            onClick: () => console.log('creating new account')
          }}
          buttonComponent={(
            <MenuButtons
              data={
                [
                  { text: 'test click', onClick: () => console.log('test click') },
                  { text: 'test click 2', onClick: () => console.log('test click 2') },
                ]
              }
            />
          )}
        />
        <DisplayCard
          innerButtonData={{
            text: "+ Create New Account",
            onClick: () => console.log('creating new account')
          }}
        />
      </GridWrapper>
    )
}
export default AbsentCardContainer;
