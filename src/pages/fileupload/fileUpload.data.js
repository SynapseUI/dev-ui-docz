import React from 'react';
import styled from 'styled-components';
import Colors from 'synapsefi-dev-ui';

export let intialState = {
  files: [
    {
      name: 'https://cdn.synapsepay.com/uploads/2019/10/02/3BmuL7ytDEjFrQkhn9cOxY01GSXTU5wCoHA8z4aMiJsN6l2RWq.png'
    }
  ],
  // checkedFiles: []
};

export const fileUploadData = [];

export const customText = () => {
  const ReadOnlyText = styled.p`
    font-size: 14px;
    color: ${Colors.PLACEHOLDER_GRAY};
  `

  return (
    <ReadOnlyText>
      No Document
    </ReadOnlyText>
  );
};

export const requiredDocuments = [
  // 1. Proof of account
  {
    "allowedFileTypes": [
      "png",
      "jpg",
      "jpeg",
      "pdf"
    ],
    "commonName": "Proof of account",
    "isMulti": true,
  },
  // 2. Authorization
  {
    "allowedFileTypes": [
      "png",
      "jpg",
      "jpeg"
    ],
    "commonName": "Authorization",
    "isMulti": true
  },
  // 3. Social Security Card
  {
    "allowed_file_types": [
      "png",
      "jpg",
      "jpeg"
    ],
    "commonName": "Social Security Card",
    "isMulti": false
  },
  // 4. Lending terms
  {
    "allowed_file_types": [
      "png",
      "jpg",
      "jpeg"
    ],
    "commonName": "Lending Terms",
    "isMulti": false,
    "error": true
  }
];

export let fileValues = {
  'bd58154cd50dab5064b577e470f52474f0b57aa2aa33ed18d616f551b307ee03': {
    'subDocumentId': 'bd58154cd50dab5064b577e470f52474f0b57aa2aa33ed18d616f551b307ee03',
    'documentValue': 'https://cdn.synapsepay.com/uploads/2019/10/02/3BmuL7ytDEjFrQkhn9cOxY01GSXTU5wCoHA8z4aMiJsN6l2RWq.png'
  }
};

export const generateID = (function() {
  let hashes = [];

  const genRand = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  return function genHash() {
    let randNum = genRand(256, 999);
    let hash = randNum;
    let strNum = randNum.toString();
    strNum.split('').forEach((char) => {
      hash += String.fromCharCode(genRand(65, 90));
    });

    if(hashes.includes(hash)) {
      return genHash();
    } else {
      hashes.push(hash);
      return hash;
    }
  };
}());