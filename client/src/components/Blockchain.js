import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion, Table } from 'semantic-ui-react';

import { loadBlockchain } from '../actions';

class Blockchain extends Component {
  componentDidMount() {
    this.props.loadBlockchain();
  }
  render() {
    const rootPanels = this.props.blockchain.map((block, panelIndex) => {
      console.log(block);
      return {
        key: `block-${panelIndex}`,
        title: `Block ${panelIndex}`,
        content: {
          content: (
            <div>
              <Table compact>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Summary</Table.HeaderCell>
                    <Table.HeaderCell />
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Number Of Transactions</Table.Cell>
                    <Table.Cell>{block.transactions.length}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Previous Hash</Table.Cell>
                    <Table.Cell>{block.previous_hash}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Proof</Table.Cell>
                    <Table.Cell>{block.proof}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Timestamp</Table.Cell>
                    <Table.Cell>{block.timestamp}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>Block Reward</Table.Cell>
                    <Table.Cell>10</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              <Accordion.Accordion
                panels={block.transactions.map((tx, txIndex) => {
                  return {
                    key: `tx-${txIndex}`,
                    title: `Transaction ${txIndex}`,
                    content: `Sender: ${tx.sender} Recipient: ${
                      tx.recipient
                    } Amount: ${tx.amount}`
                  };
                })}
              />
            </div>
          )
        }
      };
    });

    return <Accordion panels={rootPanels} styled />;
  }
}

const mapStateToProps = ({ network }) => {
  return {
    blockchain: network.blockchain
  };
};

export default connect(
  mapStateToProps,
  { loadBlockchain }
)(Blockchain);
