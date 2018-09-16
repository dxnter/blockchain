import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewNode from './NewNode';

import { addNode, loadNodes, removeNode } from '../actions';

class Network extends Component {
  render() {
    return (
      <div>
        <NewNode />
      </div>
    );
  }
}

const mapStateToProps = ({ node }) => {
  return {
    nodes: node.nodes,
    newNodeUrl: node.newNodeUrl,
    error: node.error,
    success: node.success
  };
};

export default connect(
  mapStateToProps,
  { addNode, loadNodes, removeNode }
)(Network);
