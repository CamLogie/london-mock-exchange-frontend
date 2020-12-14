import React, { Component } from "react";
import Registration from "./auth/Registration";
import TransactionForm from "./portfolio/transaction/transactionForm.js"

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Registration />
      </div>
    );
  }
}