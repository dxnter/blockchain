import { combineReducers } from 'redux';

import NetworkReducer from './node';
import NodesReducer from './network';
const rootReducer = combineReducers({
  network: NetworkReducer,
  nodes: NodesReducer
});

export default rootReducer;
