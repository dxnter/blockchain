import {
  CREATE_WALLET,
  SET_WALLET,
  SEND_TX,
  MINE_BLOCK,
  RESOLVE_CHAIN,
  SET_FUNDS
} from '../actions/actionTypes';

const initialState = {
  blockchain: [],
  openTransactions: [],
  wallet: null,
  error: null,
  success: null,
  funds: 0.0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_WALLET: {
      console.log('Wallet created');
      break;
    }
    case SEND_TX: {
      console.log('TX sent');
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
    case SET_FUNDS: {
      return { ...state, funds: action.funds };
    }
    default:
      return state;
  }
}
