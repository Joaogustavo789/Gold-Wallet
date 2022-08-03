import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  render() {
    const { expenseTable } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenseTable.map((el, index) => (
            <tr key={ index }>
              <td>{ el.description }</td>
              <td>{ el.tag }</td>
              <td>{ el.method }</td>
              <td>{ Number(el.value).toFixed(2) }</td>
              <td>{ el.exchangeRates[el.currency].name }</td>
              <td>{ parseFloat(el.exchangeRates[el.currency].ask).toFixed(2) }</td>
              <td>
                {
                  parseFloat(el.exchangeRates[el.currency].ask * el.value).toFixed(2)
                }
              </td>
              <td>BRL</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenseTable: state.wallet.expenses,
});

Table.propTypes = {
  expenseTable: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Table);
