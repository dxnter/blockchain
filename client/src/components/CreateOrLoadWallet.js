import React from 'react';
import { connect } from 'react-redux';
import { Segment, Button, Divider } from 'semantic-ui-react';

import { loadWallet } from '../actions';

const CreateOrLoadWallet = props => {
  return (
    <Segment padded>
      <Button color="green" fluid>
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
  { loadWallet }
)(CreateOrLoadWallet);
