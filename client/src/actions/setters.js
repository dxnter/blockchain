import {
  SET_WALLET,
  SET_BLOCKCHAIN,
  SET_FUNDS,
  TX_ERROR,
  MINE_ERROR,
  TX_SUCCESS,
  MINE_SUCCESS
} from './actionTypes';

export function setWallet(wallet) {
  return {
    type: SET_WALLET,
    wallet
  };
}

export function setBlockchain(blockchain) {
  return {
    type: SET_BLOCKCHAIN,
    blockchain
  };
}

export function setFunds(amt) {
  return {
    type: SET_FUNDS,
    funds: amt
  };
}

export function setTxError(error) {
  return {
    type: TX_ERROR,
    error
  };
}

export function setMineError(error) {
  return {
    type: MINE_ERROR,
    error
  };
}

export function setTxSuccess(success) {
  return {
    type: TX_SUCCESS,
    success
  };
}

export function setMineSuccess(success) {
  return {
    type: MINE_SUCCESS,
    success
  };
}
