import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import shortid from 'shortid';

import { loadOpenTransactions } from '../actions';

const OpenTransactionsWrapper = styled.div`
  grid-row-start: 6;
  grid-column-start: 2;
  grid-column-end: 12;
  display: grid;
  grid-template-rows: auto;
  overflow: hidden;
  border-radius: 0.2rem;
  ul {
    border: solid 1px rgba(34, 36, 38, 0.15);
    overflow: hidden;
  }
`;

class OpenTransactions extends Component {
  componentDidMount() {
    this.props.loadOpenTransactions();
  }

  render() {
    return (
      <OpenTransactionsWrapper>
        {this.props.openTransactions.reverse().map(transaction => {
          return (
            <ul key={shortid.generate()}>
              <li>{transaction.sender}</li>
              <li>{transaction.recipient}</li>
              <li>{transaction.amount}</li>
            </ul>
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
