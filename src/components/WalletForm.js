import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCoins } from '../redux/actions/index';

class WalletForm extends Component {
  componentDidMount() {
    const { newCoins } = this.props;
    newCoins();
  }

  render() {
    const { currencie } = this.props;
    return (
      <main>
        <form>
          <label htmlFor="despesas">
            Valor da Despesa:
            <input
              id="despesas"
              data-testid="value-input"
              placeholder="Digite o valor da despesa"
            />
          </label>
          <label htmlFor="descrição">
            Descrição:
            <textarea
              id="descrição"
              data-testid="description-input"
              placeholder="Adicione sua descrição"
            />
          </label>
          <label htmlFor="moeda">
            Moeda:
            <select
              id="moeda"
              data-testid="currency-input"
            >
              {currencie.map((money) => (
                <option
                  key={ money }
                >
                  {money}
                </option>
              ))}
            </select>
          </label>
          <label htmlFor="pagamento">
            Forma de Pagamento:
            <select
              id="pagamento"
              data-testid="method-input"
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            Categoria:
            <select
              id="categoria"
              data-testid="tag-input"
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  newCoins: () => dispatch(getCoins()),
});

const mapStateToProps = (state) => ({
  currencie: state.wallet.currencies,
});

WalletForm.propTypes = {
  currencie: PropTypes.func.isRequired,
  newCoins: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
