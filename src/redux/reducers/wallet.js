// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_COINS } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_COINS:
    return {
      ...state,
      currencies: Object.keys(action.coins).filter((el) => el !== 'USDT'),
    };
  default:
    return state;
  }
};

export default wallet;
