import React from 'react';
import styled from 'styled-components';
import { CountryPhoneInput } from 'synapsefi-dev-ui';

const Wrapper = styled.div`
  width: 350px;
  .syn-dev-ui-dropdown-container {
    z-index: 100;
  }
`;

const getCountryNumber = code => {
  const list = {
    USA: 1,
    GBR: 44,
    CAN: 1,
  };

  return list[code] || 1;
};

class CountryPhoneInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { countryPhoneNumber: '' }
  }

  render(){
    const { countryPhoneNumber } = this.state;

    return (
      <Wrapper>
        <CountryPhoneInput
          value={countryPhoneNumber}
          propName="countryPhoneNumber"
          onChange={(e, value) => this.setState({ countryPhoneNumber: value })}
          options={[
            { key: 'USA', text: 'USA' },
            { key: 'GBR', text: 'GBR' },
            { key: 'CAN', text: 'CAN' },
          ]}
          getCallingCode={getCountryNumber}
        />
      </Wrapper>
    )
  }
}

export default CountryPhoneInputContainer;
