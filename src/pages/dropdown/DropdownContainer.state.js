import React from 'react';
import { Dropdown } from 'synapsefi-dev-ui';

class DropdownContaienr extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selection: '' }
  }

  render(){
    const { selection } = this.state;

    return (
      <Dropdown
        value={selection}
        width="300px"
        onChange={(e, value, field) => this.setState({ selection: value })}
        options={
          [
            { key: 'cat', text: 'Cat' },
            { key: 'dog', text: 'Dog' },
            { key: 'mouse', text: 'Mouse' },
          ]
        }
      />
    )
  }
}

export default DropdownContaienr;
