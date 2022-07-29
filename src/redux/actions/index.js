// Coloque aqui suas actions
export const USER_STATE = 'USER_STATE';
export const WALLET_STATE = 'WALLET_STATE';

export const addUser = (email) => ({
  type: USER_STATE,
  payload: email,
});

export const addWallet = (payload) => ({
  type: WALLET_STATE,
  payload,
});
