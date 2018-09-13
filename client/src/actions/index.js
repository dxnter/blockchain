import { FETCH_ACTIVE_TAB } from '../actions/actionTypes';

export function fetchActiveTab(e, { name }) {
  return {
    type: FETCH_ACTIVE_TAB,
    payload: name
  };
}
