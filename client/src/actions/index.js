import axios from 'axios';
import { SET_WALLET, SET_FUNDS } from './actionTypes';

const ROOT_URL = 'http://localhost:5000';

export function createWallet() {
  return (dispatch, getState) => {
    axios
      .post(`${ROOT_URL}/wallet`)
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

export function createTransaction(values) {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/transaction`, {
        recipient: values.recipient,
        amount: Number(values.amount)
      })
      .then(response => {
        dispatch(setFunds(response.data.funds));
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function setFunds(amt) {
  return {
    type: SET_FUNDS,
    funds: amt
  };
}
