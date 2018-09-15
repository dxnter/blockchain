import {
  CREATE_WALLET,
  SET_WALLET,
  MINE_BLOCK,
  RESOLVE_CHAIN,
  SET_FUNDS,
  TX_ERROR,
  MINE_ERROR,
  TX_SUCCESS,
  MINE_SUCCESS,
  SET_BLOCKCHAIN,
  SET_OPEN_TX
} from '../actions/actionTypes';

const initialState = {
  blockchain: [],
  openTransactions: [],
  wallet: null,
  tx_error: null,
  mine_error: null,
  tx_success: null,
  mine_success: null,
  funds: 0.0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_WALLET: {
      console.log('Wallet created');
      break;
    }
    case MINE_BLOCK: {
      console.log('Block mined');
      break;
    }
    case RESOLVE_CHAIN: {
      console.log('Blockchain resolved');
      break;
    }
    case SET_WALLET: {
      return {
        ...state,
        wallet: {
          public_key: action.wallet.public_key,
          private_key: action.wallet.private_key
        }
      };
    }
    case SET_BLOCKCHAIN: {
      return {
        ...state,
        blockchain: action.blockchain
      };
    }
    case SET_OPEN_TX: {
      return {
        ...state,
        openTransactions: action.transactions
      };
    }
    case SET_FUNDS: {
      return { ...state, funds: action.funds };
    }
    case TX_ERROR: {
      return { ...state, tx_error: action.error };
    }
    case MINE_ERROR: {
      return { ...state, mine_error: action.error };
    }
    case TX_SUCCESS: {
      return { ...state, tx_success: action.success };
    }
    case MINE_SUCCESS: {
      return { ...state, mine_success: action.success };
    }
    default:
      return state;
  }
}
