import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUser } from '../redux/actions/index';
import '../styles/Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  changeButton = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  render() {
    const { email, password } = this.state;
    const { newUser, history: { push } } = this.props;
    const caracterMin = 6;
    return (
      <main className="login">
        <div className="nameGold">
          Gold
          <span className="nameWallet">Wallet</span>
        </div>
        <label htmlFor="email">
          <input
            className="emailInput"
            type="email"
            data-testid="email-input"
            id="email"
            value={ email }
            name="email"
            placeholder="email"
            onChange={ this.changeButton }
          />
        </label>
        <label htmlFor="senha">
          <input
            className="passwordInput"
            type="password"
            data-testid="password-input"
            id="senha"
            placeholder="senha"
            value={ password }
            name="password"
            onChange={ this.changeButton }
          />
        </label>
        <button
          className="buttonEntrar"
          type="button"
          disabled={ !(this.validateEmail(email) && password.length >= caracterMin) }
          onClick={ () => { newUser(email); push('/carteira'); } }
        >
          <span className="nameButton">Entrar</span>
        </button>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  newUser: (payload) => dispatch(addUser(payload)),
});

Login.propTypes = {
  newUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.string,
  }).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
