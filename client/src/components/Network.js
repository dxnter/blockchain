import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import shortid from 'shortid';
import NewNode from './NewNode';

import { loadNodes, removeNode } from '../actions';

const NetWorkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(auto-fit, 1fr);
`;

class Network extends Component {
  componentDidMount() {
    this.props.loadNodes();
  }

  renderNodes = () => {
    const { nodes, removeNode } = this.props;
    console.log(nodes, removeNode);
    console.log(this.props);
    return (
      <ul>
        {nodes.map(nodeUrl => {
          return (
            <li key={shortid.generate()} onClick={() => removeNode(nodeUrl)}>
              {nodeUrl}
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return (
      <NetWorkWrapper>
        <NewNode />
        {this.renderNodes()}
      </NetWorkWrapper>
    );
  }
}

const mapStateToProps = ({ nodes }) => {
  return {
    nodes: nodes.nodes,
    newNodeUrl: nodes.newNodeUrl,
    error: nodes.error,
    success: nodes.success
  };
};

export default connect(
  mapStateToProps,
  { loadNodes, removeNode }
)(Network);
