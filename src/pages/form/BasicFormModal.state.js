import React from 'react';
import { BasicFormModal, Button } from 'synapsefi-dev-ui';

import * as basicData from './data/basicForm.data';

class BasicFormModalContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }

  render(){
    return (
      <React.Fragment>
        <Button onClick={() => this.setState({ isOpen: true })}>open modal</Button>

        <BasicFormModal
          headerText="Basic Form Modal"
          width="500px"
          isOpen={this.state.isOpen}
          closeModal={() => this.setState({ isOpen: false })}
          { ...basicData }
        >
          <p>children can go here</p>
        </BasicFormModal>
      </React.Fragment>
    );
  }
}

export default BasicFormModalContainer;
