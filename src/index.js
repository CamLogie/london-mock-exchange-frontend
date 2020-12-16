import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
// import FetchTickerAndName from ./FetchTickerAndName.js

//code below regarding autocomplete - to be moved into transactions directory
import {render} from 'react-dom';
import Autocomplete from "./Autocomplete";
require("./styles.css");
// code above regarding autocomplete - to be moved into transactions directory

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//code below regarding autocomplete - to be moved into transactions directory


function AComplete() {
  return (
    <div>
      <h1>Companies to invest in</h1>
      <h2>Start typing and select which company is going to make you big bucks!</h2>
      <Autocomplete
        suggestions={[
          "JMAT",
          "FRES",
          "JD.",
          "MRO",
          "BRBY",
          "MNDI",
          "POLY",
          "SLA",
          "RTO",
          "SLA"
        ]}
      />
    </div>
  );
}

const container = document.createElement("div");
document.body.appendChild(container);
render(<AComplete />, container);
