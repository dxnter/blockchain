import {
  SET_NEW_NODE_URL,
  SET_NODES,
  SET_NETWORK_ERROR,
  SET_NETWORK_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  nodes: [],
  newNodeUrl: '',
  error: null,
  success: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_NEW_NODE_URL: {
      return { ...state, newNodeUrl: action.url };
    }
    case SET_NODES: {
      return { ...state, nodes: action.nodes };
    }
    case SET_NETWORK_ERROR: {
      return { ...state, error: action.error };
    }
    case SET_NETWORK_SUCCESS: {
      return { ...state, success: action.success };
    }
    default:
      return state;
  }
}
