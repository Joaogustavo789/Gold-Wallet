// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET_STATE } from '../actions/index';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
    editor: false,
    idToEdit: 0,
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case WALLET_STATE:
    return {
      ...state,
      wallet: action.state,
    };
  default:
    return state;
  }
};

export default wallet;
