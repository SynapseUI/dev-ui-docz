import React from 'react';
import { SvgIcons } from 'synapsefi-dev-ui';
import { FloatingActionButton } from 'synapsefi-dev-ui';

const floatingActionButtonData = {
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
  },
};

class FABContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FloatingActionButton
        hoverText="Example Floating action button"
        panelHeader="Example Floating action button"
        panelContent={
          <p>Some Content here</p>
        }
        data={floatingActionButtonData}
      />
    )
  }
}

export default FABContainer;
