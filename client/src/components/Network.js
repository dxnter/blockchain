import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Divider } from 'semantic-ui-react';
import shortid from 'shortid';
import NewNode from './NewNode';

import { loadNodes, removeNode } from '../actions';

const NetWorkWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(auto-fit, 1fr);
`;

const DividerWrapper = styled(Divider)`
  grid-row-start: 2;
  grid-column-start: 1;
  grid-column-end: -1;
`;

const NodeWrapper = styled.ul`
  grid-row-start: 3;
  grid-column-start: 5;
  grid-column-end: 9;
  list-style: none;
  padding: 0;
  li {
    border: 1px solid rgba(34, 36, 38, 0.15);
    padding: 10px;
    margin: 1.5rem 0rem;
    cursor: pointer;
  }
`;

class Network extends Component {
  componentDidMount() {
    this.props.loadNodes();
  }

  renderNodes = () => {
    const { nodes, removeNode } = this.props;
    return (
      <NodeWrapper>
        {nodes.map(nodeUrl => {
          return (
            <li key={shortid.generate()} onClick={() => removeNode(nodeUrl)}>
              {nodeUrl} (click to delete)
            </li>
          );
        })}
      </NodeWrapper>
    );
  };

  render() {
    return (
      <NetWorkWrapper>
        <NewNode />
        <DividerWrapper />
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
