import React from 'react';
import { Input } from 'synapsefi-dev-ui';

class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' }
  }

  render(){
    const { input } = this.state;

    return (
      <Input
        value={input}
        propName='input'
        onChange={(e, value, field) => this.setState({ input: value })}
        placeholder="Simple Input"
        style={{ width: "300px" }}
      />
    )
  }
}

export default InputContainer;
