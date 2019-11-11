import React, { Component } from 'react';

import FileUpload from 'synapsefi-dev-ui/dist/components/FileUpload/FileUpload'
import CheckboxGroup from 'synapsefi-dev-ui/dist/components/CheckboxGroup/CheckboxGroup'
import renderPageLevelAlert from 'synapsefi-dev-ui/dist/components/RenderPageLevelAlert/renderPageLevelAlert'

import { truncateFileName, checkMaxFile } from 'synapsefi-dev-ui/dist/components/FileUpload/util/index'
console.log("tfN", truncateFileName)
import {
  fileUploadData,
  fileValues,
  intialState,
  generateID,
  customText
} from './fileUpload.data';


/**
 * This is a custom wrapper component for FileUpload,
 * the local state of files uploaded is maintained here.
 * Reducer stores should also be referenced here.
 *
 * @param {object}          document - an object which can be used to pass in initial state and file parameters
 **** @param {string}       document.acceptedFiles - is a requirement to determine what file DropZone will accept
 * @param {number}          [idx] - index passed in from this parent component if multiple rows of FileUpload is being rendered.
 * @param {string||number}  [key] - if parent container renders multiple rows of FileUpload component then a key is needed
 **/

class FileUploadContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: intialState.files,
      fileValues: fileValues,
      isLoading: false,
      checkedFiles: [],
      fileUploadData: []
    };
  }

  // need it when updating new file
  updateFileState = (files) => {
    const fileClones = Object.assign(this.state.files, {});
    const uploadedFiles = _.map(files, (file) => {
      return {
        name: file.name
      }
    }
    );
    const updatedFiles = fileClones.concat(uploadedFiles);
    this.setState({ ...this.state, files: updatedFiles })
  }

  // need it when uploading new file
  genFileValues = (files) => {
    const fileValueObj = _.reduce(files, (acc, file) => {
      const uniqueID = generateID();
      acc[uniqueID] = {
        subDocumentId: uniqueID,
        documentValue: file.name
      }
      return acc;
    }, {});

    const updatedFileValues = Object.assign(this.state.fileValues, fileValueObj);

    this.setState({ fileValues: updatedFileValues });
  }

  updateCheckedFiles = (e, value, field) => {
    this.setState({ checkedFiles: value });
  };

  /**
   * onDrop is required for FileUpload component.
   * It is a callback function which gets called everytime there is an onDrop event triggered by DropZone.
   * This function can be async, and used to update reducer stores as well as make api calls.
   * Before upload/update logic a check on maximum file count is made,
   * because Dropzone does not natively handle max file logic.
   * If the FileUpload component meets file upload requirements,
   * then this function should update local state, stores, and make api calls.
   *
   * @param {array}     files - directly passed values on the event of DropZone onDrop
   * @param {boolean}   isMulti - boolean value to determine if onDrop should use logic for multiple files uploaded
   */

  // need it when uploading new file
  onDrop = (files, isMulti) => {
    const maxFiles = 3;
    const maxFileLength = isMulti ? maxFiles : 1;
    if (checkMaxFile(this.state.files, files, maxFileLength)) {
      renderPageLevelAlert({
        type: 'WARNING',
        message: `Could not Upload Document, Max Number of ${maxFileLength} Documents Exceeded`
      });
    } else {
      this.updateFileState(files);
      this.genFileValues(files);
    }
  }

  // wont render without it
  modalChildren = (props) => {
    console.log("mChildren",props)

    const options = _.map(props.fileValues, (file, key) => {
      console.log(file.documentValue)
      return {
        key: file.documentValue,
        text: file.documentValue
      };
    });

    return (
      <CheckboxGroup
        value={this.state.checkedFiles}
        propName="checkedFiles"
        onChange={this.updateCheckedFiles}
        selectionType="classic"
        width="300px"
        options={options}
      />
    )
  }

  // needed to remove docs
  removeDocument = () => {
    const { checkedFiles, fileValues } = this.state;
    const fileClone = Object.assign(this.state.files, {});
    const fileValueClone = Object.assign(this.state.fileValues, {});
    const fileList = fileClone.map((file) => file.name);
    const checkedList = this.state.checkedFiles;

    const updatedDocs = _.difference(fileList, checkedList).map((file) => {
      return {
        name: file
      };
    });

    const updatedFileList = updatedDocs.map((docVal) => {
      return _.filter(fileValues, (file) => {
        return file.documentValue === docVal.name
      });
    });

    const updatedFiles = updatedFileList.reduce((acc, file) => {
      acc[file[0].subDocumentId] = file[0]
      return acc;
    }, {})

    this.setState({
      files: updatedDocs,
      fileValues: updatedFiles
    });
  }

  // need it to render modal buttons and work render in general
  modalButtons = (props) => {
    const {
      isLoading,
      updateModal
    } = props;

    return (
      [
        {
          text: 'Cancel',
          style: isLoading ? 'isDisabled' : 'secondary',
          onClick: () => updateModal(false),
        },
        {
          text: 'Delete',
          size: 'small',
          style: isLoading ? 'isLoading' : 'remove',
          onClick: () => [this.removeDocument(), updateModal(false)]
        }
      ]
    )
  }

  render() {
    const { document, idx, key } = this.props;
    const { allowedFileTypes, commonName, error } = document;
    const { files, fileValues, isLoading } = this.state;

    console.log(fileUploadData)
    console.log(fileValues)
    console.log(this.state, 'state')
    console.log(this.props, 'props')
    console.log(document, 'doc')

    return (
      <FileUpload
        acceptedFiles={allowedFileTypes} ////
        files={files} ////
        fileUploadData={fileUploadData}
        fileValues={fileValues} /////
        // customText={customText}
        // isDisabled={true}
        deleteAction={() => {console.log('hi')}}
        error={error}
        key={key}
        idx={idx}
        fileUploadRowText={`${idx + 1}. ${commonName}`}////
        modalHeaderText={"Delete Document"} ////
        modalChildren={this.modalChildren} ////
        modalButtons={this.modalButtons} ////
        maxFileNameLength={16} 
        updateCheckedFiles={this.updateCheckedFiles} //
        updateFileState={this.updateFileState} //
        isLoading={isLoading} ////
        isMulti={document.isMulti} ////
        fileUploadData={fileUploadData}
        onDrop={this.onDrop}
      >
      </FileUpload>
    );
  }
}

export default FileUploadContainer;

