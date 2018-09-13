import { FETCH_ACTIVE_TAB } from '../actions/actionTypes';

export default function(state = '/', action) {
  switch (action.type) {
    case FETCH_ACTIVE_TAB: {
      return action.payload;
    }
    default:
      return state;
  }
}
