import React from 'react';
import styled from 'styled-components';
import FileUploadContainer from './FileUploadContainer.state';
import Colors from 'synapsefi-dev-ui/dist/colors';

const Container = styled.div`
  border: 2px solid ${Colors.COOL_LIGHT};
  border-radius: 5px;
  padding: 20px 30px 50px;
  height: auto;
  width: auto;
`;

const FileUpload = () => {
  return (
    <Container>
      <FileUploadContainer />
    </Container>
  )
}

export default FileUpload;