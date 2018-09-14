import React from 'react';
import { Button } from 'semantic-ui-react';

const MineOrResolve = props => {
  return (
    <div id="MineOrResolve">
      <Button size="large" color="blue" icon="sync" content="Mine" />
      <Button
        size="large"
        color="orange"
        icon="object ungroup outline"
        content="Resolve Conflicts"
      />
    </div>
  );
};

export default MineOrResolve;