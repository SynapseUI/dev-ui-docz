import React from 'react';

import { Modal, Button } from 'synapsefi-dev-ui';

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false }
  }

  render() {
    const { isOpen } = this.state;

    return (
      <React.Fragment>
        <Modal
          width="510px"
          headerText={'Add New Login'}
          isOpen={isOpen}
          closeModal={() => this.setState({ isOpen: false })}

          btnObjs={[
            {
              text: 'Cancel',
              size: 'small',
              style: 'tertiary',
              onClick: () => this.setState({ isOpen: false }),
            },
            {
              text: 'Submit',
              size: 'small',
              style: 'primary',
              onClick: () => console.log('button clicked'),
            },
          ]}
        >
          <div style={{ height: '100px' }}>
            <p>Inner Modal</p>
          </div>
        </Modal>

        <Button onClick={() => this.setState({ isOpen: true })}>Open Modal</Button>
      </React.Fragment>
    )
  }
}

export default ModalContainer;
