import React from 'react';
import { RadioGroup } from 'synapsefi-dev-ui';

class RadioGroupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: '' }
  }

  render(){
    const { selectionType = '' } = this.props;
    const { product } = this.state;

    return (
      <RadioGroup
        selectionType={selectionType}
        value={product}
        propName="products"
        onChange={(e, value) => this.setState({ product: value })}
        width="300px"
        options={[
          { key: 'DEPOSIT-US', text: 'Deposit Product' },
          { key: 'CARD-US', text: 'Card Issusance' },
          { key: 'panda', text: 'Panda' },
        ]}
      />
    )
  }
}

export default RadioGroupContainer;
