import React, { Component } from 'react';

import FileUpload from 'synapsefi-dev-ui/dist/components/FileUpload/FileUpload'
import CheckboxGroup from 'synapsefi-dev-ui/dist/components/CheckboxGroup/CheckboxGroup'

const FileUploadContainer = () => {
  return(
    <FileUpload
        acceptedFiles={[
          "png",
          "jpg",
          "jpeg",
          "pdf"
        ]}
        files={[
          {
            name: 'https://cdn.synapsepay.com/uploads/2019/10/02/3BmuL7.png'
          }
        ]}
        fileValues={{
          'bd58154cd50dab5064b577e470f52474f0b57aa2aa33ed18d616f551b307ee03': {
            'subDocumentId': 'bd58154cd50dab5064b577e470f52474f0b57aa2aa33ed18d616f551b307ee03',
            'documentValue': 'https://cdn.synapsepay.com/uploads/2019/10/02/3BmuL7.png'
          }
        }}
        deleteAction={() => console.log('Delete Action')}
        fileUploadRowText={'1. Proof of account'}
        modalHeaderText={"Delete Document"}
        modalChildren={() => (
            <CheckboxGroup
              value={[]}
              propName="checkedFiles"
              onChange={() => {console.log('Modal box checked')}}
              selectionType="classic"
              width="300px"
              options={[{key: "https://cdn.synapsepay.com/uploads/2019/10/02/3BmuL7.png", text: "2019/10/02/3B...png"}]}
            />
        )}
        modalButtons={() => (
            [
              {
                text: 'Cancel',
                style: false ? 'isDisabled' : 'secondary',
                onClick: () => console.log('Cancel'),
              },
              {
                text: 'Delete',
                size: 'small',
                style: false ? 'isLoading' : 'remove',
                onClick: () => console.log('Delete')
              }
            ]
        )}
        onDrop={() => console.log('Upload file')}
      />
  )
}

export default FileUploadContainer;