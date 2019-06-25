import React from 'react';
import { SwitchButton } from 'synapsefi-dev-ui';

class SwitchButtonContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { switch: true }
  }

  render() {
    return (
      <SwitchButton
        value={this.state.switch}
        propName="switch"
        onChange={(e, value) => this.setState({ switch: value })}
      />
    )
  }
}

export default SwitchButtonContainer;
