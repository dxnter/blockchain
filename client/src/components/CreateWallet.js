import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';

import { createWallet } from '../actions';

const CreateWallet = props => {
  return (
    <Button color="green" onClick={props.createWallet}>
      <Icon name="clone" /> New Wallet
    </Button>
  );
};

export default connect(
  null,
  { createWallet }
)(CreateWallet);
