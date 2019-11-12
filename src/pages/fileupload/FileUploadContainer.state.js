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
            name: 'https://cdn.synapsepay.com/uploads/2019/10/02/3BmuL7ytDEjFrQkhn9cOxY01GSXTU5wCoHA8z4aMiJsN6l2RWq.png'
          }
        ]}
        fileUploadData={[]}
        fileValues={{
          'bd58154cd50dab5064b577e470f52474f0b57aa2aa33ed18d616f551b307ee03': {
            'subDocumentId': 'bd58154cd50dab5064b577e470f52474f0b57aa2aa33ed18d616f551b307ee03',
            'documentValue': 'https://cdn.synapsepay.com/uploads/2019/10/02/3BmuL7ytDEjFrQkhn9cOxY01GSXTU5wCoHA8z4aMiJsN6l2RWq.png'
          }
        }}
        deleteAction={() => console.log('Delete Action')}
        error={false}
        key={1}
        idx={1}
        fileUploadRowText={'1. Proof of account'}
        maxFileNameLength={16} 
        isLoading={false}
        isMulti={false}
        fileUploadData={[]}
        modalHeaderText={"Delete Document"}
        modalChildren={() => (
            <CheckboxGroup
              value={[]}
              propName="checkedFiles"
              onChange={() => {console.log('Modal box checked')}}
              selectionType="classic"
              width="300px"
              options={[{key: "https://cdn.synapsepay.com/uploads/2019/10/02/3BmuL7ytDEjFrQkhn9cOxY01GSXTU5wCoHA8z4aMiJsN6l2RWq.png", text: "2019/10/02/3B...png"}]}
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
      />
  )
}

export default FileUploadContainer;