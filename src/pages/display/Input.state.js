import React from 'react';
import { DataBoard } from 'synapsefi-dev-ui';

// -----------------------------------------------------------------------------------------
// ------------------------------------ Styled Components ----------------------------------
// -----------------------------------------------------------------------------------------


const getDisplayData = (values) => {
    const { SSN = '', PASSPORT = '' } = values; 

    return {
        DATE_OF_BIRTH: {
            display: `${values["DATE_OF_BIRTH"]}`,
        },
        PHONE_NUMBER: {
            display: `${values["PHONE_NUMBER"]}`,
        },
        SSN: {
            label: 'SSN',
            display: `****** ${JSON.stringify(SSN).substr(-4)}`,
        },
        PASSPORT: {
            label: 'PASSPORT',
            display: `****** ${JSON.stringify(PASSPORT).substr(-4)}`,
        },
    };
};

const values = {
    FULL_NAME: "Some Dude", // will get displayed 
    EMAIL: "some@dude.com", // will get displayed
    DATE_OF_BIRTH: "10/10/1990",
    PHONE_NUMBER: 4154154158,
    SSN: 1234567890,
    PASSPORT: 12345678
}


// -----------------------------------------------------------------------------------------
// ------------------------------ Detail From User Component -------------------------------
// -----------------------------------------------------------------------------------------
export default class TestBlocks extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (
			<DataBoard 
				values={values}
				displayData={getDisplayData}
			/>
    )
  }
}


