import React from 'react';
import { Dropdown } from 'synapsefi-dev-ui';
import PropTypes from 'prop-types';

Dropdown.defaulProps = {
  value: ''
};

Dropdown.propType = {
  value: PropTypes.string
};

export default Dropdown;