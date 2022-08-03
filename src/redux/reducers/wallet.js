// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_COINS, RECEIVE_COINS2 } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  const newId = state.expenses.length;
  const newValueState = {
    ...action.valueState,
    id: newId,
    exchangeRates: action.coins2 };
  switch (action.type) {
  case RECEIVE_COINS:
    return {
      ...state,
      currencies: Object.keys(action.coins).filter((el) => el !== 'USDT'),
    };
  case RECEIVE_COINS2:
    return {
      ...state,
      expenses: [...state.expenses, newValueState],
    };
  default:
    return state;
  }
};

export default wallet;
