import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCoins, getCoins2 } from '../redux/actions/index';
import '../styles/WalletForm.css';

const stateFood = 'Alimentação';
class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: stateFood,
    };
  }

  componentDidMount() {
    const { newCoins } = this.props;
    newCoins();
  }

  handleInputs = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  changeClickInputs = () => {
    const { newCoins2 } = this.props;
    newCoins2(this.state);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: stateFood,
    });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencie } = this.props;
    return (
      <main className="walletForm">
        <form>
          <label htmlFor="despesas">
            <span className="valorDes">Valor da Despesa:</span>
            <input
              className="inputValorDes"
              type="number"
              id="despesas"
              data-testid="value-input"
              placeholder="Digite o valor da despesa"
              value={ value }
              name="value"
              onChange={ this.handleInputs }
            />
          </label>
          <label htmlFor="descrição">
            <span className="descrição">Descrição:</span>
            <textarea
              className="inputDescri"
              id="descrição"
              data-testid="description-input"
              placeholder="Adicione sua descrição"
              value={ description }
              name="description"
              onChange={ this.handleInputs }
            />
          </label>
          <label htmlFor="moeda">
            <span className="coinSelect">Moeda:</span>
            <select
              className="inputCoin"
              id="moeda"
              data-testid="currency-input"
              value={ currency }
              name="currency"
              onChange={ this.handleInputs }
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
            <span className="method">Forma de Pagamento:</span>
            <select
              className="inputMethod"
              id="pagamento"
              data-testid="method-input"
              value={ method }
              name="method"
              onChange={ this.handleInputs }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            <span className="category">Categoria:</span>
            <select
              className="inputCategory"
              id="categoria"
              data-testid="tag-input"
              value={ tag }
              name="tag"
              onChange={ this.handleInputs }
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
        </form>
        <button
          className="buttonDespesa"
          type="button"
          onClick={ this.changeClickInputs }
        >
          <span className="nameButtonDes">Adicionar despesa</span>
        </button>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  newCoins: () => dispatch(getCoins()),
  newCoins2: (valueState) => dispatch(getCoins2(valueState)),
});

const mapStateToProps = (state) => ({
  currencie: state.wallet.currencies,
});

WalletForm.propTypes = {
  currencie: PropTypes.func.isRequired,
  newCoins: PropTypes.func.isRequired,
  newCoins2: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
