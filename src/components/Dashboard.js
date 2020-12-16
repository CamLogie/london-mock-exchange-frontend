import React, { Component } from "react";
import PortfolioForm from "./Portfolio/PortfolioForm";
import PortfolioList from "./Portfolio/PortfolioList";


export default class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      loadingPortfolioForm: false
    }

    this.loadPortfolioForm = this.loadPortfolioForm.bind(this)
  }

  loadPortfolioForm(){
    this.setState({
      loadingPortfolioForm: true 
    })
  }

  render(){
    return (
      <div>
        <div>
          <h1 classname="App-header">Dashboard</h1>
          <h1>Status: {this.props.userToken === null ? "Logged out" : "Logged in"}</h1>
          {this.state.loadingPortfolioForm ? <PortfolioForm userToken={this.props.userToken}/> : <button onClick={this.loadPortfolioForm}>Create New Portfolio</button>}
          <PortfolioList userToken={this.props.userToken} />
        </div>
      </div>
    )
  }
}