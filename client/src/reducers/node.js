import {
  CREATE_WALLET,
  LOAD_WALLET,
  SEND_TX,
  MINE_BLOCK,
  RESOLVE_CHAIN
} from '../actions/actionTypes';

const initialState = {
  blockchain: [],
  openTransactions: [],
  wallet: null,
  walletLoading: false,
  txLoading: false,
  dataLoading: false,
  showElement: null,
  error: null,
  success: null,
  funds: 0,
  outgoingTx: {
    recipient: '',
    amount: 0
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_WALLET: {
      console.log('Wallet created');
      break;
    }
    case LOAD_WALLET: {
      console.log('Wallet loaded');
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
    default:
      return state;
  }
}
