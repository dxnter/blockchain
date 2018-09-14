import axios from 'axios';
import { SET_WALLET, SET_FUNDS } from './actionTypes';

const ROOT_URL = 'http://localhost:5000';

export function loadWallet() {
  return (dispatch, getState) => {
    axios
      .get(`${ROOT_URL}/wallet`)
      .then(response => {
        dispatch(
          setWallet({
            public_key: response.data.public_key,
            private_key: response.data.private_key
          })
        );
        dispatch(setFunds(response.data.funds));
      })
      .catch(err => {
        console.log(`Error on loadWallet() ${err}`);
        dispatch(setWallet(null));
      });
  };
}

export function setWallet(wallet) {
  return {
    type: SET_WALLET,
    wallet
  };
}

export function setFunds(amt) {
  return {
    type: SET_FUNDS,
    funds: amt
  };
}