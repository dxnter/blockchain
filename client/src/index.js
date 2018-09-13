import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { logger } from 'redux-logger';
import { Container } from 'semantic-ui-react';
import './index.css';

import reducers from './reducers';

import PageHeader from './components/PageHeader';
import Network from './components/Network';
import Node from './components/Node';

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Fragment>
        <Container>
          <PageHeader />
          <Switch>
            <Route exact path="/" component={Node} />
            <Route path="/network" component={Network} />
          </Switch>
        </Container>
      </Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
