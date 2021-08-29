import Transaction from "./Transaction";

const TransactionList = props => {
  return (
    <div className="transactions">
      {props.transactionList.length > 0 ? (
        <>
          <h2 className="transactions-list-title">Transactions:</h2>
          <ul className="transactions-list">
            {props.transactionList.map(item => (
              <div>
                <Transaction transaction={item} />
              </div>
            ))}
          </ul>
        </>
      ) : (
        <h2 className="transactions-list__fallback">No transaction(s) available.</h2>
      )}
    </div>
  );
};

export default TransactionList;
