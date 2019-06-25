import React from 'react';
import styled from 'styled-components';
import { FloatingActionButton } from 'synapsefi-dev-ui';

import floatingActionButtonData from './floatingActionButton.data';

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
