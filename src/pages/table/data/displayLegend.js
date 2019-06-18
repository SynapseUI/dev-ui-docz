import React from 'react';
import styled from 'styled-components';
import { StatusTag } from 'synapsefi-dev-ui';

const FlexAlign = styled.span`
  display: flex;
`;

const NewEntry = ({value}) => (
  <FlexAlign>
    <span style={{ marginRight: '8px'}}>{value}</span>
    <StatusTag status='NEW' />
  </FlexAlign>
);

const displayLegend = (key, value, options = {}) => {
  const { rowValues = {} } = options;

  switch (key) {
    case 'username':
      return <p>{ value } { rowValues.id }</p>
    case 'permission':
      return value ? <StatusTag status={value} /> : ''
    case 'amount':
      return value && value.toLocaleString('en', {minimumFractionDigits: 2}) + ' USD'
    default:
      return value;
  }
}

export default displayLegend;
