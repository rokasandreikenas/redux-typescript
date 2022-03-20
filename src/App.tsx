import "./App.css";

import { State, actionCreators } from "./state";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { bindActionCreators } from "redux";

function App() {
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const { amount, isLoading } = useSelector((state: State) => state.bank);

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(500)}>Deposit</button>
      <button onClick={() => withdrawMoney(500)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Banrupt</button>
      {isLoading && <h2>Loading...</h2>}
    </div>
  );
}

export default App;
