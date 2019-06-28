import React from 'react';
import { SvgIcons } from 'synapsefi-dev-ui';

const floatingActionButtonData = {
  Test1: {
    onClick: () => console.log('hi'),
    text: 'test 1',
    icon: <SvgIcons.crypto_wallet size="24px" />
  },
  Test2: {
    onClick: () => console.log('hi'),
    text: 'test 2',
    icon: <SvgIcons.deposit_account size="24px" />
  },
  Test3: {
    onClick: () => console.log('hi'),
    text: 'test 3',
    icon: <SvgIcons.payment size="24px" />
  },
};

export default floatingActionButtonData;
