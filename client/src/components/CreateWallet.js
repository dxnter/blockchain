import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';

const CreateWallet = props => {
  return (
    <Button color="green">
      <Icon name='clone' /> New Wallet
    </Button>
  );
};

export default connect(
  null,
  null
)(CreateWallet);
