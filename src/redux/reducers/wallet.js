// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_COINS, RECEIVE_COINS2, DELETE_VALUES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  const newId = state.expenses.length;
  const newValueState = {
    id: newId,
    ...action.valueState,
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
  case DELETE_VALUES:
    return {
      ...state,
      expenses: state.expenses.filter((ele) => ele.id !== action.deleted),
    };
  default:
    return state;
  }
};

export default wallet;
