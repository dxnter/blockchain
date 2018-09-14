import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import { Form, Button, Message } from 'semantic-ui-react';
import { validate } from '../utils';

import { createTransaction, setTxError, setTxSuccess } from '../actions';

const renderField = field => {
  const {
    label,
    input,
    meta: { touched, error }
  } = field;

  return (
    <Form.Field>
      <label>{label}</label>
      <input placeholder="Enter key" {...input} />
      {touched && error && <Message size="mini" negative header={error} />}
    </Form.Field>
  );
};

class NewTransaction extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <Field label="Recipient" name="recipient" component={renderField} />
        <Field label="Amount" name="amount" component={renderField} />
        <Button type="submit" color="green">
          Send
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = ({ network }) => {
  return {
    funds: network.funds
  };
};

export default connect(
  mapStateToProps,
  null
)(
  reduxForm({
    form: 'NewTransaction',
    validate,
    onSubmit: (values, dispatch, props) => {
      if (values.amount > props.funds) {
        dispatch(setTxSuccess(null));
        return dispatch(setTxError('Insufficient balance'));
      }
      dispatch(createTransaction(values));
      dispatch(reset('NewTransaction'));
      dispatch(setTxError(null));
    }
  })(NewTransaction)
);
