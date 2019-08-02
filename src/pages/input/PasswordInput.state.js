import React from 'react';
import { PasswordInput } from 'synapsefi-dev-ui';

class PasswordInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' }
  }

  render(){
    const { password } = this.state;

    return (
      <div style={{ width: '300px' }}>
        <PasswordInput
          value={password}
          propName="password"
          onChange={(e, value) => this.setState({ password: value })}
          label="Password"
        />
      </div>
    )
  }
}

export default PasswordInputContainer;
