import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';
import { Label, Form, Button } from 'semantic-ui-react';
import styled from 'styled-components';

import { addNode } from '../actions';

const NewNodeWrapper = styled.div`
  grid-column-start: 5;
  grid-column-end: 9;
  @media only screen and (max-width: 700px) {
    grid-column-start: 3;
    grid-column-end: 11;
  }
`;

const NewNodeSchema = Yup.object().shape({
  newNodeUrl: Yup.string().required('Please enter a node URL')
});

class NewNode extends Component {
  render() {
    console.log(this.props);
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
              <Field
                name="newNodeUrl"
                type="text"
                value={props.values.newNodeUrl || ''}
              />
              <ErrorMessage name="newNodeUrl" />
              <Button type="submit">Add</Button>
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
