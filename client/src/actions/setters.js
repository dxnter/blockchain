import {
  SET_WALLET,
  SET_BLOCKCHAIN,
  SET_FUNDS,
  SET_NEW_NODE_URL,
  SET_NODES,
  TX_ERROR,
  MINE_ERROR,
  SET_NETWORK_ERROR,
  SET_NETWORK_SUCCESS,
  TX_SUCCESS,
  MINE_SUCCESS,
  SET_OPEN_TX
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

export function setOpenTrasactions(transactions) {
  return {
    type: SET_OPEN_TX,
    transactions
  };
}

export function setFunds(amt) {
  return {
    type: SET_FUNDS,
    funds: amt
  };
}

export function setNewNodeUrl(url) {
  return {
    type: SET_NEW_NODE_URL,
    url
  };
}

export function setNodes(nodes) {
  return {
    type: SET_NODES,
    nodes
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

export function setNetworkError(error) {
  return {
    type: SET_NETWORK_ERROR,
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

export function setNetworkSuccess(success) {
  return {
    type: SET_NETWORK_SUCCESS,
    success
  };
}
