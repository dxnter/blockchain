import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider, Message } from 'semantic-ui-react';
import CreateOrLoadWallet from './CreateOrLoadWallet';
import NewTransaction from './NewTransaction';
import MineOrResolve from './MineOrResolve';

class Node extends Component {
  render() {
    return (
      <div className="node">
        {!this.props.wallet && <CreateOrLoadWallet />}
        {this.props.tx_error && (
          <Message
            error
            header="Transaction Failure"
            content={this.props.tx_error}
          />
        )}
        {this.props.tx_success && (
          <Message
            success
            header="Transaction Success"
            content={this.props.tx_success}
          />
        )}
        {this.props.wallet && <NewTransaction />}
        {this.props.wallet && <Divider />}
        {this.props.wallet && <MineOrResolve />}
      </div>
    );
  }
}

const mapStateToProps = ({ network }) => {
  return {
    wallet: network.wallet,
    tx_error: network.tx_error,
    tx_success: network.tx_success
  };
};

export default connect(
  mapStateToProps,
  null
)(Node);
