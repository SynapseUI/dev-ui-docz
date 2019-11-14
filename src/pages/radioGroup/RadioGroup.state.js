import React from 'react';
import RadioGroup from 'synapsefi-dev-ui/dist/components/RadioGroup/RadioGroup';

class RadioGroupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { STATEMENT_DELIVERY: false }
  }

  render(){
    return (
    <RadioGroup
      value={this.state.STATEMENT_DELIVERY}
      selectionType="check"
      onChange={(e, value) => this.setState({ STATEMENT_DELIVERY: value })}
      options={[
        { key: false, text: 'Upload Licenses' },
        { key: true, text: 'Upload Letter' },
      ]}
    />
    )
  }
}

export default RadioGroupContainer;
