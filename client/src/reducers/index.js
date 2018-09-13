import { combineReducers } from 'redux';

import NetworkReducer from './node';
import NodesReducer from './network';
import activeTab from './activeTab';

const rootReducer = combineReducers({
  network: NetworkReducer,
  nodes: NodesReducer,
  activeTab: activeTab
});

export default rootReducer;
