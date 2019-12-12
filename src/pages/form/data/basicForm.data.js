import React from 'react';
import _ from 'lodash';
import { FormTypeConstants } from 'synapsefi-dev-ui';

/** Required */
export const initialState = () => ({
  email: '',
  pets: '',
  custom: 'child'
});

export const formData = [
  {
    propName: 'pets',
    formType: FormTypeConstants.TYPE_DROPDOWN,
    label: 'Pets',
    placeholder: 'Select a pet type',
    options: [
      { key: 'cat', text: 'Cat' },
      { key: 'dog', text: 'Dog' },
      { key: 'goose', text: 'Goose' },
    ]
  },
  {
    propName: 'email',
    formType: FormTypeConstants.TYPE_INPUT,
    label: 'Email'
  },
  {
    propName: 'custom',
    isChild: true
  },
];

export const handleSubmit = (values, props) => {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('Submitting', values);
      resolve('foo');
    }, 2000);
  });
};

/** Optional Actions */

export const handleValidation = (values, props) => {
  return {
    ...(_.isEmpty(values.email) && { email: 'Email can not be empty'}),
  }
};

export const handleCancel = () => {
  console.log('Cancel');
}

export const buttonSettings = {
  cancelButton: {
    size: 'medium'
  },
  submitButton: {
    size: 'medium',
    text: 'Submit',
    loadingText: 'Submitting'
  }
};