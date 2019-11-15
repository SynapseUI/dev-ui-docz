import React from 'react';
import { StatusPage, } from 'synapsefi-dev-ui';
import OnboardingCompletePageSvg from './OnboardingCompletePageSvg'
import styled from 'styled-components'

const Container = styled.div`
  /* font-family: 'Nunito Sans';
  width: 100;
  height: 100; */
`;

const iconItemData = [
  {
    svg: <OnboardingCompletePageSvg />,
    primaryText: 'You’ve completed the onboarding process.',
    secondaryText: 'Our team will review your documents and we will contact you with next steps.',
  },
];

const StatusPageContainer = () => {
  return (
    <Container>
      <StatusPage
        headerText='Success!'
        iconData={iconItemData}
        button={{ text: 'Close', onClick: () => console.log('close the app? window.close() doesn\'t work in React') }}
        additionalLink={{ text: 'Visit API page', onClick: () => window.open('https://docs.synapsefi.com/docs') }}
      />
    </Container>
  );
};

export default StatusPageContainer

