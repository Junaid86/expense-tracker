import React from "react";
import Balance from "./Balance";
const ExpendeDetails = props => {
  return (
    <div className="new-transaction">
      <Balance balance={props.balance} />
      <div className="new-transaction__control">
        <input type="number" value={props.transactionAmount} step="1" onChange={props.transactionAmountChangeHandler} />
      </div>
      <div>
        <button type="button" onClick={props.onAddTransactionClickHandler}>
          Add
        </button>
        <button type="button" onClick={props.onRemoveTransactionClickHandler}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default ExpendeDetails;
