import React from 'react';
import { NumberInput } from 'synapsefi-dev-ui';

class NumberInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      amount: '',
      date: ''
    }
  }

  render(){
    return (
      <div style={{ width: '300px' }}>
        <NumberInput
          className="custom-number-input"
          propName="phoneNumber"
          value={this.state.phoneNumber}
          onChange={(e, value) => this.setState({ phoneNumber: value })}
          label="Phone Number"
          type="phone"
        />

        <NumberInput
          propName="amount"
          value={this.state.amount}
          onChange={(e, value) => this.setState({ amount: value })}
          label="Amount"
          type="currency"
        />

        <NumberInput
          propName="date"
          value={this.state.date}
          onChange={(e, value) => this.setState({ date: value })}
          label="Date"
          type="date"
        />
      </div>
    )
  }
}

export default NumberInputContainer;
