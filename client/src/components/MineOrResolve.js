import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { mineBlock, resolveBlock } from '../actions';

const MineOrResolve = props => {
  return (
    <div id="MineOrResolve">
      <Button
        onClick={props.mineBlock}
        size="large"
        color="blue"
        icon="sync"
        content="Mine"
      />
      <Button
        onClick={props.resolveBlock}
        size="large"
        color="orange"
        icon="object ungroup outline"
        content="Resolve Conflicts"
      />
    </div>
  );
};

export default connect(
  null,
  { mineBlock, resolveBlock }
)(MineOrResolve);
