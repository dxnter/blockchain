import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Divider } from 'semantic-ui-react';
import CreateOrLoadWallet from './CreateOrLoadWallet';
import NewTransaction from './NewTransaction';

class Node extends Component {
  render() {
    return (
      <div className="node">
        {!this.props.wallet && <CreateOrLoadWallet />}
        {this.props.wallet && <NewTransaction />}
        {this.props.wallet && <Divider />}
      </div>
    );
  }
}

const mapStateToProps = ({ network }) => {
  return {
    wallet: network.wallet,
    error: network.error
  };
};

export default connect(
  mapStateToProps,
  null
)(Node);
