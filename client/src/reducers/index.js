import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import NetworkReducer from './node';
import NodesReducer from './network';

const rootReducer = combineReducers({
  network: NetworkReducer,
  nodes: NodesReducer,
  form: formReducer
});

export default rootReducer;
