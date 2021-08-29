const Transaction = props => {
  return (
    // <div>
    //   <span>{props.transaction.date} - </span>
    //   <span>{props.transaction.amount} - </span>
    //   <span>{props.transaction.operation}</span>
    //   </div>

    <li>
      <div className="transaction-item">
        <div className="transaction-date">{props.transaction.date}</div>
        <div className="transaction-amount">${props.transaction.amount}</div>
        <div className="transaction-operation">{props.transaction.operation}</div>
      </div>
    </li>
  );
};

export default Transaction;
