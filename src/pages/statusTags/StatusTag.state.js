import React from 'react';
import styled from 'styled-components';
import { StatusTag, StatusCodeTag } from 'synapsefi-dev-ui';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const data = [
  'READ_AND_WRITE',
  'READ',
  'CLOSED',
  'UNVERIFIED',
  'SEND-AND-RECEIVE',
  'LOCKED',
  'MAKE-IT-GO-AWAY',
  'RECEIVE',
  'CREDIT',
  'DEBIT',
  'CREDIT-AND-DEBIT',
  'PENDING',
  'TERMINATED',
  'INACTIVE',
  'ACTIVE',
  'REJECTED',
  'QUEUED-BY-SYNAPSE',
  'QUEUED-BY-RECEIVER',
  'CREATED',
  'PROCESSING-DEBIT',
  'PROCESSING-CREDIT',
  'SETTLED',
  'CANCELED',
  'RETURNED',
  'NEW',
  'VALID',
  'INVALID',
  'physical_docs',
  'virtual_docs',
  'social_docs',
  'SUBMITTED',
  'SUBMITTED|REVIEWING',
  'SUBMITTED|MFA_PENDING',
  'SUBMITTED|VALID',
  'SUBMITTED|INVALID',
  'SUBMITTED|INVALID|BLACKLIST',
  'MISSING',
];

class StatusTagContainer extends React.Component {

  render(){
    return (
      <Grid>
        {data.map((val) => (
          <StatusTag status={val} />
        ))}
      </Grid>
    )
  }
}

export default StatusTagContainer;
