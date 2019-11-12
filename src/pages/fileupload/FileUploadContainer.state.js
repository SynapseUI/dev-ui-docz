import React from 'react';
import FileUpload from 'synapsefi-dev-ui/dist/components/FileUpload/FileUpload'
import CheckboxGroup from 'synapsefi-dev-ui/dist/components/CheckboxGroup/CheckboxGroup'

const modalButton = (props) => {
  const {
    isLoading,
    updateModal
  } = props;

  return(
    [
      {
        text: 'Cancel',
        style: false ? 'isDisabled' : 'secondary',
        onClick: () => updateModal(false),
      },
      {
        text: 'Delete',
        size: 'small',
        style: false ? 'isLoading' : 'remove',
        onClick: () => [alert('This is the removeDocument function, which would delete the selected files'), updateModal(false)]
      }
    ]
  
  )
}


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
      deleteAction={() => alert('This is the deleteAction function, which would delete the file')}
      fileUploadRowText={"1. Proof of account"}
      modalHeaderText={"Delete Document"}
      modalChildren={() => (
        <CheckboxGroup
          value={[]}
          propName="checkedFiles"
          onChange={() => alert("This is the updatedCheckedFiles function, which would check the selected files you would like to delete")}
          selectionType="classic"
          width="300px"
          options={[{key: "https://cdn.synapsepay.com/uploads/2019/10/02/3BmuL7.png", text: "2019/10/02/3B...png"}]}
        />
      )}
      modalButtons={modalButton}
      onDrop={() => alert('This is the onDrop function, which would update the files')}
    />
  )
}

export default FileUploadContainer;