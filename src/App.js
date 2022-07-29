import React from 'react';
import { Route } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <main>
      <div>Hello, TrybeWallet!</div>
      <Route exact path="/" component={ Login } />
      <Route path="/carteira" component={ Wallet } />
    </main>
  );
}

export default App;
