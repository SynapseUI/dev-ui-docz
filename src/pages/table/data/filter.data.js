import React from 'react';
import _ from 'lodash';
import { FormTypeConstants } from 'synapsefi-dev-ui';

export const initialState = (props) => ({
  type: props.type || '',
  allowed: props.allowed || [],
  date: props.date || '',
});

export const formData = props => {
  const { filterField } = props;

  return [
    {
      isChild: true,
      options: {
        NODE: { text: 'in Node ID' },
        USER: { text: 'in User ID' },
      },
      placeholder: 'Search by Node or User ID',
      propName: 'searchBarInput',
      noGrid: true
    },
    {
      formType: FormTypeConstants.TYPE_DROPDOWN,
      placeholder: 'Node Type',
      propName: 'type',
      options: [
        { key: 'DEPOSIT-US', text: 'DEPOSIT-US' }
      ],
      noGrid: true
    },
    {
      formType: FormTypeConstants.TYPE_DROPDOWN,
      placeholder: 'Node permissions',
      propName: 'allowed',
      multiselect: true,
      options: [
        { key: 'CREDIT', text: 'Credit' },
        { key: 'DEBIT', text: 'Debit' },
        { key: 'CREDIT-AND-DEBIT', text: 'Credit and Debit' },
        { key: 'PENDING', text: 'Pending' },
        { key: 'INACTIVE', text: 'Inactive' },
        { key: 'LOCKED', text: 'Locked' }
      ],
      noGrid: true
    },
    {
      formType: FormTypeConstants.TYPE_INPUT,
      placeholder: 'Created Date',
      propName: 'date',
      noGrid: true
    }
  ];
};


const typeLegend = {
  NODE: '_id',
  USER: 'user_id'
};

export const getMongoDBQuery = (values) => {
  const { searchBarInput, searchBarType } = values;

  let idSearch = {};

  if (searchBarInput && searchBarType) {
    idSearch = { [typeLegend[searchBarType]]: searchBarInput };
  }

  return {
    ...(!_.isEmpty(idSearch) && idSearch),
    ...(!_.isEmpty(values.type) && { type: values.type }),
    ...(!_.isEmpty(values.allowed) && { allowed: { $in: values.allowed } })
  };
};
