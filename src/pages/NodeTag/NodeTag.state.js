import React from 'react';
import styled from 'styled-components';
import { NodeTag } from 'synapsefi-dev-ui';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
`;

const data = [
  'DEPOSIT-US',
  'IB-DEPOSIT-US',
  'RESERVE-US',
  'SUBACCOUNT-US',
  'IB-SUBACCOUNT-US',
  'SUBNET',
  'SYNAPSE-US',
  'TRIUMPH-SUBACCOUNT-US',
  'IOU',
  'ACH-US',
  'CHECK-US',
  'WIRE-US',
  'WIRE-INT',
  'INTERCHANGE-US',
  'CRYPTO-US',
  'CARD-US',
  'SUBCARD-US',
  'CLEARING-US',
  'LOAN-US',
  'LOAN-US-REVOLVING',
  'EXTERNAL-US',
  'RDC',
  'CUSTODY-US',
  'GENERAL-NODE',
];

class NodeTagContainer extends React.Component {

  render(){
    return (
      <Grid>
        {data.map((val) => (
          <NodeTag nodeType={val} />
        ))}
      </Grid>
    )
  }
}

export default NodeTagContainer;
