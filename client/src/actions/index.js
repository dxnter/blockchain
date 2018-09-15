import axios from 'axios';

import {
  setWallet,
  setFunds,
  setTxError,
  setMineError,
  setTxSuccess,
  setMineSuccess,
  setBlockchain,
  setOpenTrasactions
} from './setters';

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
      });
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
        dispatch(setTxSuccess(`Sent ${values.amount} BTC`));
        dispatch(setFunds(response.data.funds));
        dispatch(setMineSuccess(null));
        dispatch(setMineError(null));
        dispatch(loadOpenTransactions());
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function loadBlockchain() {
  return dispatch => {
    axios
      .get(`${ROOT_URL}/chain`)
      .then(response => {
        dispatch(setBlockchain(response.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function loadOpenTransactions() {
  return dispatch => {
    axios.get(`${ROOT_URL}/transactions`).then(response => {
      dispatch(setOpenTrasactions(response.data));
    });
  };
}

export function mineBlock() {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/mine`)
      .then(response => {
        dispatch(setMineSuccess(response.data.message));
        dispatch(setFunds(response.data.funds));
        dispatch(loadOpenTransactions());
        dispatch(loadBlockchain());
        dispatch(setTxError(null));
        dispatch(setTxSuccess(null));
        dispatch(setMineError(null));
      })
      .catch(err => {
        dispatch(setMineError(err.response.data.message));
        dispatch(setTxError(null));
        dispatch(setTxSuccess(null));
        dispatch(setMineSuccess(null));
      });
  };
}

export function resolveBlock() {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/resolve-conflicts`)
      .then(response => {
        dispatch(setMineError(null));
        dispatch(setMineSuccess(response.data.message));
      })
      .catch(err => {
        dispatch(setMineSuccess(null));
        dispatch(setMineError(err.response.data.message));
      });
  };
}
