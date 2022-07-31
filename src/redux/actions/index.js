// Coloque aqui suas actions
export const USER_STATE = 'USER_STATE';
export const REQUEST_COINS = 'REQUEST_COINS';
export const RECEIVE_COINS = 'RECEIVE_COINS';

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
