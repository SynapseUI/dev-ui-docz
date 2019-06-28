import React from 'react';

import { Panel, Button } from 'synapsefi-dev-ui';

class PanelContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { panelIsOpen: false }
  }

  render() {
    const { panelIsOpen } = this.state;

    return (
      <React.Fragment>
        <Panel
          title="Panel isOpen value is outside the component"
          isPanelOpen={panelIsOpen}
          onPanelClose={() => this.setState({ panelIsOpen: false })}
        >
          <p>Useful if you need to open without a button, i.e. componentDidMount</p>
        </Panel>

        <Button secondary small onClick={() => this.setState({ panelIsOpen: true })}>
          Open Panel
        </Button>
      </React.Fragment>
    )
  }
}

export default PanelContainer;
