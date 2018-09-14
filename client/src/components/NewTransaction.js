import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Form, Button, Message } from 'semantic-ui-react';
import { validate } from '../utils';

import { createTransaction } from '../actions';

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
      {touched && (error && <Message size="mini" negative header={error} />)}
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

const onSubmit = (values, dispatch) => {
  dispatch(createTransaction(values));
};

export default connect()(
  reduxForm({
    form: 'NewTransaction',
    validate,
    onSubmit
  })(NewTransaction)
);
