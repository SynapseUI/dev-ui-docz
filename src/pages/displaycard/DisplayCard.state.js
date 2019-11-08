import React from 'react';
import styled from 'styled-components';

import { Panel, Button } from 'synapsefi-dev-ui';

import { DisplayCard, MenuButtons } from 'synapsefi-dev-ui';

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(3, 300px);
  grid-auto-rows: 200px;
  grid-auto-columns: 200px;

  /* margin-bottom: 100px; */
`;

  const DisplayCardContainer = () => {
    return (
      <GridWrapper>
        {/* <Header text="Normal Case" /> */}
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
        {/* <Header text="Active Case" /> */}
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
      </GridWrapper>
    )
}
export default DisplayCardContainer;
