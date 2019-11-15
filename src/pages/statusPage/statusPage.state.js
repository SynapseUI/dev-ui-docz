import React from 'react';
import { StatusPage, } from 'synapsefi-dev-ui';
import OnboardingCompletePageSvg from './OnboardingCompletePageSvg'

const iconItemData = [
  {
    svg: <OnboardingCompletePageSvg />,
    primaryText: 'You’ve completed the onboarding process.',
    secondaryText: 'Our team will review your documents and we will contact you with next steps.',
  },
];

const StatusPageContainer = () => {
  return (
    <StatusPage
      headerText='Success!'
      iconData={iconItemData}
      button={{ text: 'Close', onClick: () => console.log('close the app? window.close() doesn\'t work in React') }}
      additionalLink={{ text: 'Visit API page', onClick: () => window.open('https://docs.synapsefi.com/docs') }}
    />
  );
};

export default StatusPageContainer

