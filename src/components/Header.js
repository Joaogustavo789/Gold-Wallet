import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../styles/Header.css';
import Vector from '../images/Vector.png';
import Profile from '../images/profile.png';

class Header extends Component {
  render() {
    const { email, expense } = this.props;
    const magicNumber = 0;
    return (
      <header className="header">
        <span>LOGO</span>
        <div
          className="despesas"
          data-testid="total-field"
        >
          <img src={ Vector } alt="" className="image-coins" />
          <span className="totalDes">Total de Despesas: </span>
          <span
            className="coinValue"
          >
            { expense.length === 0 ? magicNumber.toFixed(2)
              : expense.reduce((acc, curr) => {
                acc += parseFloat(curr.exchangeRates[curr.currency].ask * curr.value);
                return acc;
              }, 0).toFixed(2) }
          </span>
          <div
            className="coin"
            data-testid="header-currency-field"
          >
            BRL
          </div>
        </div>
        <p
          className="emailHeader"
          data-testid="email-field"
        >
          <img src={ Profile } alt="" className="image-email" />
          {email}
        </p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expense: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Header);
