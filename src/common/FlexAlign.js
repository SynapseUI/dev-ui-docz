import React from 'react';
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FlexAlign = ({ children, style }) => {
  return <Flex style={style}>{ children }</Flex>
};

export default FlexAlign;
