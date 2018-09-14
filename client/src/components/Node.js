import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateOrLoadWallet from './CreateOrLoadWallet';

class Node extends Component {
  render() {
    return (
      <div className="node">
        {!this.props.wallet && <CreateOrLoadWallet />}
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
