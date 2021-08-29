const Balance = props => {
  return (
    <div className="new-transaction__control">
      <label>Balance : {props.balance}</label>
    </div>
  );
};

export default Balance;
