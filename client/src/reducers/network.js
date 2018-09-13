import { ADD_NODE, LOAD_NODES, REMOVE_NODE } from '../actions/actionTypes';

const initialState = {
  nodes: [],
  newNodeUrl: '',
  error: null,
  success: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_NODE: {
      console.log('Add node');
      break;
    }
    case LOAD_NODES: {
      console.log('Load nodes');
      break;
    }
    case REMOVE_NODE: {
      console.log('Node removed');
      break;
    }
    default:
      return state;
  }
}
