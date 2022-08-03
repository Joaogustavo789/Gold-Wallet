// Coloque aqui suas actions
export const USER_STATE = 'USER_STATE';
export const REQUEST_COINS = 'REQUEST_COINS';
export const RECEIVE_COINS = 'RECEIVE_COINS';
export const REQUEST_COINS2 = 'REQUEST_COINS2';
export const RECEIVE_COINS2 = 'RECEIVE_COINS2';

export const addUser = (email) => ({
  type: USER_STATE,
  payload: email,
});

const coinsRequest = () => ({
  type: REQUEST_COINS,
});

const coinsReceive = (coins) => ({
  type: RECEIVE_COINS,
  coins,
});

const coinsRequest2 = () => ({
  type: REQUEST_COINS2,
});

const coinsReceive2 = (valueState, coins2) => ({
  type: RECEIVE_COINS2,
  valueState,
  coins2,
});

export function getCoins() {
  return async (dispatch) => {
    try {
      dispatch(coinsRequest());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(coinsReceive(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCoins2(valueState) {
  return async (dispatch) => {
    try {
      dispatch(coinsRequest2());
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      dispatch(coinsReceive2(valueState, data));
    } catch (error) {
      console.log(error);
    }
  };
}
