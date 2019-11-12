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

const ChildContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-grow: 1;

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;

  color: #999999;
  background: #FDFDFD;
  padding: 0 1rem;
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
        <DisplayCard
          title="Example with Children prop"
        >
          <ChildContainer>
            You have not created or assigned a Loan Reserve Account
          </ChildContainer>
        </DisplayCard>
      </GridWrapper>
    )
}
export default AbsentCardContainer;
