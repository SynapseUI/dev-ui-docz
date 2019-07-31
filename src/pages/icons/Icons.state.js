import React from 'react';
import styled from 'styled-components';
import { SvgIcons } from 'synapsefi-dev-ui';

const IconsList = styled.div`
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		background-color: #f9f9f9;
		width: 100%;
`;

const IconsDiv = styled.div`
		padding: 35px;
`;

const AllIcons = styled.div`
		display: flex;
		justify-content: center;
  align-content: center;
`;

const IconNames = styled.div`
  display: flex;
		justify-content: center;
  align-content: center;
		font-size: 13px;
`;

class Icons extends React.Component{
    render(){
        return(
            <div>
												<IconsList>
														{Object.keys(SvgIcons).map(icons => { 
															let IconsArray = icons.split('_');
															let allIconNames = IconsArray.map(name => name.charAt(0).toUpperCase() + name.substring(1) + ' ')
															return <IconsDiv>
																								<AllIcons>	{SvgIcons[icons]({size: 30})}</AllIcons>
																								<IconNames>{allIconNames}</IconNames>
																				</IconsDiv> 
															})}
												</IconsList>
            </div>
        )
    }
}

export default Icons;