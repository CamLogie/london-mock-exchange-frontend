import React, { Component } from 'react';
import axios from 'axios';

export default class TransactionForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      ticker: null,
      number_of_shares: null,
      trade_date: null,
      close_out_date: null,
      buy_price: null,
      sell_price: null,
    }
  }

  fetchFinanceData(){
    let baseUrl = 'http://api.marketstack.com/'
    let accessKey = '91d577810f3fc6e82c81f62723d07a45'
    let TICKER = 'AAPL'
    let DATE = "2020-12-11"
    let url = `${baseUrl}v1/tickers/${TICKER}/eod/${DATE}?access_key=${accessKey}`
    axios.get(url)
    .then(data => {
      let data_array = data.data
      console.log(data_array)
    })
    return "hello"
  }

  render(){
    return (
      <div>
        <button onClick={this.fetchFinanceData}>Submit Transaction</button>
      </div>
    )
  }
}
