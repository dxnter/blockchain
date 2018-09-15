import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { loadOpenTransactions } from '../actions';

const OpenTransactionsWrapper = styled.div`
  grid-row-start: 6;
  grid-column-start: 2;
  grid-column-end: 12;
  display: grid;
  grid-template-rows: (auto-fit);
`;

class OpenTransactions extends Component {
  componentDidMount() {
    this.props.loadOpenTransactions();
  }

  render() {
    return (
      <OpenTransactionsWrapper>
        {this.props.openTransactions.map(transaction => {
          return (
            <div>
              {transaction.sender}
              {transaction.recipient}
              {transaction.amount}
            </div>
          );
        })}
      </OpenTransactionsWrapper>
    );
  }
}

const mapStateToProps = ({ network }) => {
  return {
    openTransactions: network.openTransactions
  };
};

export default connect(
  mapStateToProps,
  { loadOpenTransactions }
)(OpenTransactions);
