import React from 'react';
import { SvgIcons } from 'synapsefi-dev-ui';

let floatingActionButtonData = {
  Test1: {
    onClick: () => console.log('hi'),
    text: 'test 1',
    icon: <SvgIcons.crypto_wallet />
  },
  Test2: {
    onClick: () => console.log('hi'),
    text: 'test 2',
    icon: <SvgIcons.deposit_account />
  },
  Test3: {
    onClick: () => console.log('hi'),
    text: 'test 3',
    icon: <SvgIcons.payment/>
  }
};

export default floatingActionButtonData
