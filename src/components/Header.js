import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expense } = this.props;
    const magicNumber = 0;
    return (
      <header>
        <div data-testid="email-field">{email}</div>
        <div data-testid="total-field">
          { expense.length === 0 ? magicNumber.toFixed(2)
            : expense.reduce((acc, curr) => {
              acc += parseFloat(curr.exchangeRates[curr.currency].ask * curr.value);
              return acc;
            }, 0).toFixed(2) }
        </div>
        <div data-testid="header-currency-field">BRL</div>
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
