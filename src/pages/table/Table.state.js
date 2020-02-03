import React from 'react';
import styled from 'styled-components';
import { TableContainer, SvgIcons } from 'synapsefi-dev-ui';

import tableData from './data/tableData';
// import headerData from './data/headerData';
// import displayLegend from './data/displayLegend';
// import * as filterData from './data/filter.data';

const Container = styled.div`
  .syn-dev-ui-table-container {
    min-width: 900px;
  }
`;

const DownloadButton = (props) => {
  return (
    <SvgIcons.download
      onClick={() => console.log(props)}
      size='20px'
      color='lightgrey'
    />
  );
}

class TableContainerMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tableData,
      currentPage: 1,
      isFetching: false,

      // Only applies to Filter
      filters: {
        type: 'DEPOSIT-US'
      }
    };
  }

  handleOnClick = (e, entry) => {
    console.log('Entry: ', entry);
    console.log('command: ', e.metaKey);
    console.log('shift: ', e.shiftKey);
  }

  onClickPageChange = (page) => {
    // this.setState({ currentPage: page })
    return new Promise((resolve, reject) => {
      setTimeout(() => {        
        resolve('Error has bee thrown');
      }, 1000);
    })
      .then(() => this.setState({ currentPage: page }))
      .catch((error) => {
        console.log(error);
        // this.setState({ currentPage: page });
      })
  }

  render() {
    const { tableData, currentPage } = this.state;

    return (
      <Container>
        <TableContainer
          tableType='user'
          environment="admin"
          // Data files
          tableData={tableData[currentPage]}

          onSearch={this.onClickPageChange}
          onRowClick={(id, rowValues) => console.log('id', id, 'rowValues', rowValues)}

          // pass from redux store
          page_count={Object.keys(tableData).length}
          total_count={12}

          // Top Bar (Optional Props)
          leftComponent={
            <DownloadButton />
          }
        />

        {/* <Button small onClick={() => this.setState({ isFetching: !this.state.isFetching })}>Fetch</Button> */}

      </Container>
    );
  }
}

export default TableContainerMain;
