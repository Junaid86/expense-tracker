import { Component } from "react";
import TransactionDetails from "./TransactionDetails/TransactionDetails";
import TransactionList from "./Transactions/TransactionList";
import "./Common.css";

class ManagerTransactions extends Component {
  state = {
    transactions: [],
    balance: 0,
    transactionAmount: 0,
  };

  componentDidMount() {
    this.setState({ ...this.state, balance: 500 });
  }

  transactionAmountChangeHandler = e => {
    let transactionAmount = this.state.transactionAmount;
    transactionAmount = e.target.value;

    this.setState({
      ...this.state,
      transactionAmount: transactionAmount,
    });
  };

  onAddTransactionClickHandler = () => {
    if (this.state.transactionAmount <= 0) {
      alert("Transaction amount should be greater than zero");
      return;
    }
    this.addTransactionHandler("Add");
    let balance = this.state.balance;
    balance = parseFloat(balance) + parseFloat(this.state.transactionAmount);
    this.setState({ ...this.state, balance: balance, transactionAmount: 0 });
  };

  onRemoveTransactionClickHandler = () => {
    debugger;
    if (this.state.balance <= 0) {
      alert("Insufficient balance in account");
      return;
    }
    if (this.state.transactionAmount <= 0 || this.state.transactionAmount > this.state.balance) {
      alert("Transaction amount should be greater than zero and less than balance");
      return;
    }
    this.addTransactionHandler("Remove");
    let balance = this.state.balance;
    balance = parseFloat(balance) - parseFloat(this.state.transactionAmount);
    this.setState({ ...this.state, balance: balance, transactionAmount: 0 });
  };

  addTransactionHandler = operation => {
    debugger;
    let currentdate = new Date();
    let formattedCurrentDate = currentdate.toISOString();
    debugger;
    let newTransaction = {
      date: formattedCurrentDate,
      operation: operation,
      amount: this.state.transactionAmount,
    };
    let prevtransactions = this.state.transactions;
    prevtransactions.push(newTransaction);
    this.setState({ ...this.state, transactions: prevtransactions });
  };

  render() {
    return (
      <div className="transacetion-manager">
        <h1>Expense Tracker - Basic</h1>
        <TransactionDetails
          balance={this.state.balance}
          transactionAmount={this.state.transactionAmount}
          transactionAmountChangeHandler={this.transactionAmountChangeHandler}
          onAddTransactionClickHandler={this.onAddTransactionClickHandler}
          onRemoveTransactionClickHandler={this.onRemoveTransactionClickHandler}
        />
        <TransactionList transactionList={this.state.transactions} />
      </div>
    );
  }
}

export default ManagerTransactions;
