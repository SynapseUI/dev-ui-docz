import React from 'react';
import styled from 'styled-components';
import { SvgIcons } from 'synapsefi-dev-ui';

const IconsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #f9f9f9;
  width: 100%;
`;

const IconsContainer = styled.div`
  padding: 35px;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const IconName = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 17px;
  padding: 18px;
  font-weight: 700;
`;

const IconKey = styled.p`
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 10.5px;
`;

class Icons extends React.Component{
  render(){
    return(
      <IconsList>
        {Object.keys(SvgIcons).map(iconKey => {
          const iconsKeyWords = iconKey.split('_');
          const combineIconWords = iconsKeyWords.map(word => word.charAt(0).toUpperCase() + word.substring(1) + ' ')
          return(
            <IconsContainer>
              <IconName>{combineIconWords}</IconName>
              <IconWrapper>{SvgIcons[iconKey]({size: 35})}</IconWrapper>
              <IconKey>{iconKey}</IconKey>
            </IconsContainer>
          )
        })}
      </IconsList>
    )
  }
}

export default Icons;