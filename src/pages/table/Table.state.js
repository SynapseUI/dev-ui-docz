import React from 'react';
import styled from 'styled-components';
import { Table, SvgIcons } from 'synapsefi-dev-ui';

import tableData from './data/tableData';
import headerData from './data/headerData';
import displayLegend from './data/displayLegend';
import * as filterData from './data/filter.data';

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

class TableContainer extends React.Component {
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


  // Only Applies to Filter
  onFilter = (values) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('On Filter values: ', values);
        this.setState({
          currentPage: 1,
          tableData: {
            1: {
              1234: {
                id: '1234',
                username: 'Jim',
                permission: 'SEND-AND-RECEIVE',
                date: '10/1/2013',
                business: 'Great Company'
              },
              1236: {
                id: '1236',
                username: 'Ryan',
                permission: 'RECEIVE',
                date: '10/3/2013',
                business: 'Greater Company'
              },
            },
            2: {
              1238: {
                id: '1238',
                username: 'Carry',
                permission: 'SEND-AND-RECEIVE',
                date: '10/1/2013',
                business: 'Great Company'
              },
              1239: {
                id: '1239',
                username: 'Joe',
                permission: 'RECEIVE',
                date: '10/2/2013',
                business: 'Greater Company'
              }
            }
          }
          
        })
        resolve(values);
      }, 2000);
    }).then(() => this.setState({ searchType: 'Transaction ID' }))
  }

  render() {
    const { tableData, currentPage, filters, searchType } = this.state;

    return (
      <Container>
        <Table

          // Data files
          tableData={tableData[currentPage]}
          headData={headerData}
          displayLegend={displayLegend}
          checkIfNewRow={(value) => value && (value.id === '1234') }

          // OnClick actions
          handleRowOnClick={this.handleOnClick}
          onClickPageChange={this.onClickPageChange}

          // pass from redux store
          page={currentPage}
          page_count={Object.keys(tableData).length}
          total_count={12}

          // Top Bar (Optional Props)
          topBarComponent={
            <DownloadButton />
          }

          // Filter
          filterFormData={filterData}
          filters={filters}
          onFilter={this.onFilter}
          isFetching={this.state.isFetching}
          filterColumnLimit={2}

          filterCSS={`grid-template-columns: 2fr 1fr;`}
          
          // Can add extra props if needed
          // testProp={{ test: 'hi' }}
          // searchType={searchType}
        />

        {/* <Button small onClick={() => this.setState({ isFetching: !this.state.isFetching })}>Fetch</Button> */}

      </Container>
    );
  }
}

export default TableContainer;
