import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accordion } from 'semantic-ui-react';

import { loadBlockchain } from '../actions';

const level1Panels = [
  { key: 'panel-1a', title: 'Level 1A', content: 'Level 1A Contents' },
  { key: 'panel-ba', title: 'Level 1B', content: 'Level 1B Contents' }
];

const Level1Content = (
  <div>
    Welcome to level 1<Accordion.Accordion panels={level1Panels} />
  </div>
);

const level2Panels = [
  { key: 'panel-2a', title: 'Level 2A', content: 'Level 2A Contents' },
  { key: 'panel-2b', title: 'Level 2B', content: 'Level 2B Contents' }
];

const Level2Content = (
  <div>
    Welcome to level 2<Accordion.Accordion panels={level2Panels} />
  </div>
);

const rootPanels = [
  { key: 'panel-1', title: 'Level 1', content: { content: Level1Content } },
  { key: 'panel-2', title: 'Level 2', content: { content: Level2Content } }
];

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
              {block.previous_hash}
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
