import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';
import { Message, Form, Button } from 'semantic-ui-react';
import styled from 'styled-components';

import { addNode } from '../actions';

const NewNodeWrapper = styled.div`
  grid-column-start: 5;
  grid-column-end: 9;
  margin-top: 1.5rem;
  @media only screen and (max-width: 700px) {
    grid-column-start: 3;
    grid-column-end: 11;
  }
  label {
    font-size: 0.92857143em;
    font-weight: 700;
  }
`;

const FieldWrapper = styled(Field)`
  margin-top: 10px !important;
  margin-bottom: 10px !important;
`;

const ErrWrapper = ({ className, children }) => (
  <Message size="mini" negative className={className}>
    {children}
  </Message>
);

const NewNodeSchema = Yup.object().shape({
  newNodeUrl: Yup.string().required('Please enter a node URL')
});

class NewNode extends Component {
  render() {
    return (
      <NewNodeWrapper>
        <Formik
          initialValues={{
            newNodeUrl: ''
          }}
          validationSchema={NewNodeSchema}
          onSubmit={(values, { resetForm }) => {
            this.props.addNode(values.newNodeUrl);
            resetForm({});
          }}
        >
          {props => (
            <Form onSubmit={props.handleSubmit}>
              <label>Node URL</label>
              <FieldWrapper
                name="newNodeUrl"
                type="text"
                value={props.values.newNodeUrl || ''}
                placeholder="localhost:5000"
              />
              <ErrorMessage component={ErrWrapper} name="newNodeUrl" />
              <Button type="submit" color="green">
                Add
              </Button>
            </Form>
          )}
        </Formik>
      </NewNodeWrapper>
    );
  }
}

export default connect(
  null,
  { addNode }
)(NewNode);
