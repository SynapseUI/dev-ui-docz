import React from 'react';
import { CheckboxGroup } from 'synapsefi-dev-ui';

class CheckboxGroupContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: '' }
  }

  render(){
    const { selectionType = '' } = this.props;
    const { product } = this.state;

    return (
      <CheckboxGroup
        selectionType={selectionType}
        value={product}
        propName="products"
        onChange={(e, value) => this.setState({ product: value })}
        width="250px"
        options={[
          { key: 'DEPOSIT-US', text: 'Deposit Product' },
          { key: 'CARD-US', text: 'Card Issusance' },
          { key: 'panda', text: 'Panda' },
        ]}
      />
    )
  }
}

export default CheckboxGroupContainer;
