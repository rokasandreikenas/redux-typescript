import "./App.css";

import { actionCreators } from "./state";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useTypedSelector } from "./hooks/useTypeSelector";

function App() {
  const dispatch = useDispatch();
  const [postId, setPostId] = useState("");

  const { depositMoney, withdrawMoney, bankrupt, getComments } =
    bindActionCreators(actionCreators, dispatch);

  const { amount, isLoading } = useTypedSelector((state) => state.bank);
  const { comments, loading, error } = useTypedSelector(
    (state) => state.comment
  );

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(500)}>Deposit</button>
      <button onClick={() => withdrawMoney(500)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Banrupt</button>
      {(isLoading || loading) && <h2>Loading...</h2>}
      {error && <h3>Error: {error}</h3>}
      <br />
      <br />
      <input value={postId} onChange={(e) => setPostId(e.target.value)} />
      <button onClick={() => getComments(postId)}>Search for Comments</button>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
