import React from 'react';
import { connect } from 'react-redux';
import { Segment, Button, Divider } from 'semantic-ui-react';

import { loadWallet, createWallet } from '../actions';

const CreateOrLoadWallet = props => {
  return (
    <Segment padded>
      <Button onClick={props.createWallet} color="green" fluid>
        Create a new wallet
      </Button>
      <Divider horizontal>Or</Divider>
      <Button onClick={props.loadWallet} color="blue" fluid>
        Load wallet
      </Button>
    </Segment>
  );
};

export default connect(
  null,
  { loadWallet, createWallet }
)(CreateOrLoadWallet);
