import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteValuesTable } from '../redux/actions/index';
import '../styles/Table.css';
import Edit from '../images/Edit.png';
import Delete from '../images/Delete.png';

class Table extends Component {
  render() {
    const { expenseTable, exclude } = this.props;
    return (
      <table>
        <thead>
          <tr className="thead">
            <th className="description">Descrição</th>
            <th className="tag">Tag</th>
            <th className="methods">Método de pagamento</th>
            <th className="value">Valor</th>
            <th className="coins">Moeda</th>
            <th className="cambio">Câmbio utilizado</th>
            <th className="convert">Valor convertido</th>
            <th className="conversion">Moeda de conversão</th>
            <th className="editDelete">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenseTable.map((el) => (
            <tr key={ el.id } className="tbody">
              <td className="description2">{ el.description }</td>
              <td className="tag2">{ el.tag }</td>
              <td className="method2">{ el.method }</td>
              <td className="value2">{ Number(el.value).toFixed(2) }</td>
              <td className="coin2">{ el.exchangeRates[el.currency].name }</td>
              <td
                className="cambio2"
              >
                { parseFloat(el.exchangeRates[el.currency].ask).toFixed(2) }

              </td>
              <td className="convert2">
                {
                  parseFloat(el.exchangeRates[el.currency].ask * el.value).toFixed(2)
                }
              </td>
              <td className="conversion2">BRL</td>
              <td>
                <button
                  className="buttonEdit"
                  type="button"
                  data-testid="edit-btn"
                >
                  <img src={ Edit } alt="" />
                </button>
              </td>
              <td>
                <button
                  className="buttonDelete"
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => exclude(el.id) }
                >
                  <img src={ Delete } alt="" />
                </button>
              </td>
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

const mapDispatchToProps = (dispatch) => ({
  exclude: (deleted) => dispatch(deleteValuesTable(deleted)),
});

Table.propTypes = {
  expenseTable: PropTypes.func.isRequired,
  exclude: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
