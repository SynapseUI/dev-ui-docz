import React from 'react';
import styled from 'styled-components';
import { FloatingActionButton } from 'synapsefi-dev-ui';

import floatingActionButtonData from './floatingActionButton.data';

const StyledFloatingActionButton = styled(FloatingActionButton)`
  z-index: 1001;
`;

class FABContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { panelIsOpen: false }
  }

  render() {
    const { panelIsOpen } = this.state;

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
