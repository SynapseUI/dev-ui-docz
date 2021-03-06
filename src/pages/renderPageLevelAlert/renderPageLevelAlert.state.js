import React from 'react';
import styled from 'styled-components';
import { Button, renderAlertBanner, OBAlertBanner } from 'synapsefi-dev-ui';

const Wrapper = styled.div`
  margin: 100px;
  display: flex;
  justify-content: space-around;
`;

const SUCCESS = 'SUCCESS';
const WARNING = 'WARNING';
const ERROR = 'ERROR';


const InputContainer = () => {
  const handleOnClick = ({ type, message }) => {
    renderAlertBanner({ type, message });
  };
 
  return (
    <React.Fragment>
      <OBAlertBanner />
      <Wrapper>
        
        <Button onClick={() => handleOnClick({ type: SUCCESS, message: 'Good Job' })}>{SUCCESS}</Button>
        <Button onClick={() => handleOnClick({ type: WARNING, message: 'You forgot to add keys didnt you...' })} secondary>
          {WARNING}
        </Button>
        <Button onClick={() => handleOnClick({ type: ERROR, message: '...I AM ERROR' })} remove>
          {ERROR}
        </Button>
      </Wrapper>
    </React.Fragment>
  );  
}

export default InputContainer;
