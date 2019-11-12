import React, { Component } from 'react';
import { requiredDocuments } from './fileUpload.data';
import styled from 'styled-components';
import FileUploadContainer from './FileUploadContainer.state';
import Colors from 'synapsefi-dev-ui/dist/colors';

import { FileUploadRow, FileUploadStatus } from 'synapsefi-dev-ui';

const Container = styled.div`
  border: 2px solid ${Colors.COOL_LIGHT};
  border-radius: 5px;
  padding: 20px 30px 150px;
  height: auto;
  width: auto;
`;

class FileUpload extends Component {
  render() {
    return (
      <Container>
        {
          // all the 1 - 4 starting with proof of account
          _.map(requiredDocuments, (document, idx) => {
            return (
              <FileUploadContainer
                key={idx}
                document={document}
                idx={idx}
              />
            )
          })
        }
        <br/>
        {/* Blank input thats grayed out */}
        <FileUploadRow
          // key={1}
          idx={1}
        >
          {/* grayed out box of left hand side */}
          <FileUploadStatus
            fileValues={{}}
          />
        </FileUploadRow>
      </Container>
    );
  }
}

export default FileUpload;