import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Message } from 'semantic-ui-react';
import CreateOrLoadWallet from './CreateOrLoadWallet';
import NewTransaction from './NewTransaction';
import MineOrResolve from './MineOrResolve';
import Blockchain from './Blockchain';
import OpenTransactions from './OpenTransactions';

class Node extends Component {
  render() {
    return (
      <div className="node">
        {!this.props.wallet && <CreateOrLoadWallet />}
        {this.props.tx_error && (
          <Message
            id="txError"
            error
            header="Transaction Failure"
            content={this.props.tx_error}
          />
        )}
        {this.props.tx_success && (
          <Message
            id="txSuccess"
            success
            header="Transaction Success"
            content={this.props.tx_success}
          />
        )}
        {this.props.wallet && <NewTransaction />}
        {this.props.wallet && <Divider />}
        {this.props.wallet && <MineOrResolve />}
        {this.props.mine_error && (
          <Message
            id="mineFailure"
            error
            header="Failure"
            content={this.props.mine_error}
          />
        )}
        {this.props.mine_success && (
          <Message
            id="mineSuccess"
            success
            header="Success"
            content={this.props.mine_success}
          />
        )}
        {this.props.wallet && <OpenTransactions />}
        {this.props.wallet && <Blockchain />}
      </div>
    );
  }
}

const mapStateToProps = ({ network }) => {
  return {
    wallet: network.wallet,
    tx_error: network.tx_error,
    mine_error: network.mine_error,
    tx_success: network.tx_success,
    mine_success: network.mine_success
  };
};

export default connect(
  mapStateToProps,
  null
)(Node);
