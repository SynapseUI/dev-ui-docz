import React from 'react';
import RadioGroup from 'synapsefi-dev-ui/dist/components/RadioGroup/RadioGroup';

class RadioGroupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mtl: 'LICENSES' }
  }

  render(){
    return (
      <RadioGroup
        value={this.state.mtl}
        labelWidth={"235px"}
        selectionType="check"
        onChange={e => this.setState({ mtl: e.target.value })}
        label="Label Text"
        options={[{ key: 'LICENSES', text: 'Upload Licenses' }, { key: 'LETTER', text: 'Upload Letter' }]}
      />
    )
  }
}

export default RadioGroupContainer;
