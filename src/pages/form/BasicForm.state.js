import React from 'react';
import { BasicForm } from 'synapsefi-dev-ui';

import * as basicData from './data/basicForm.data';

class BasicFormContainer extends React.Component {
  render(){
    return (
      <BasicForm
        { ...basicData }
      >
        <p>children can go here</p>
      </BasicForm>
    )
  }
}

export default BasicFormContainer;
