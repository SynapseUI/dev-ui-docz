import React from 'react';
import styled from 'styled-components';
import { SelectTagDropdown } from 'synapsefi-dev-ui';

const StyledSelectTagDropdown = styled(SelectTagDropdown)`
  width: '300px',
  zIndex: '1000';
`;

class DropdownContaienr extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selection: '' }
  }

  render(){
    const { selection } = this.state;

    return (
      <StyledSelectTagDropdown
        value={selection}
        style={{ zIndex: '1000' }}
        placeholder="Select a Pet"
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
