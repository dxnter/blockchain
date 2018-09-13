import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';
import Network from './components/Network';
import Node from './components/Node';

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/network" component={Network} />
        <Route exact path="/" component={Node} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
