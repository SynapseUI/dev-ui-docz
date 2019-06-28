import React from 'react';
import styled from 'styled-components';

import { TooltipMessage } from 'synapsefi-dev-ui';

const RelativeContainer = styled.div`
  position: relative;

  &:hover {
    .syn-dev-ui-tooltip-message {
      display: flex;
      top: -6px;
      left: 6rem;
    }
  }
`;

const TooltipMessageContainer = () => {

  return (
    <RelativeContainer>
      Hover Here
      <TooltipMessage>{"Message"}</TooltipMessage>
    </RelativeContainer>
  )
}

export default TooltipMessageContainer;
