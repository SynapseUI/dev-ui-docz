import React from 'react';
import { StatusCodeTag } from 'synapsefi-dev-ui';

class StatusTagContainer extends React.Component {

  render(){
    return (
      <React.Fragment>
        <p>HTTP status tags</p>
        <StatusCodeTag status={101} />
        <StatusCodeTag status={201} />
        <StatusCodeTag status="304" />
        <StatusCodeTag status={499} />
        <StatusCodeTag status="501" />
      </React.Fragment>
    )
  }
}

export default StatusTagContainer;
