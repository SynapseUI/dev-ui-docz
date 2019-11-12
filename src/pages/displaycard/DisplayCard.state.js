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

  const DisplayCardContainer = () => {
    return (
      <GridWrapper>
         <DisplayCard 
          title="Regular Title"
          data={
            [
              { label: 'Account Name', value: 1234567890 },
              { label: 'Current Balance', value: '$4.50' },
            ]
          }
          tooltip="Collateral account used for chargebacks and unathorized returns."
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
          title="Regular Title"
          isActive
          data={
            [
              { label: 'Account Name', value: 1234567890 },
              { label: 'Current Balance', value: '$4.50' },
            ]
          }
        />
      </GridWrapper>
    )
}
export default DisplayCardContainer;
