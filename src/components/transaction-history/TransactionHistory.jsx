// #4 Transaction history
import PropTypes from 'prop-types';
import css from 'components/transaction-history/transaction-history.module.css';

export const TransactionHistory = ({ items }) => (
  <table className={css['transaction__history']}>
    <thead className={css['transaction__head']}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody className={css['transaction__body']}>
      {items.map(item => (
        <tr key={item.id} className={css['transaction__row']}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
