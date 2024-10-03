import { useState } from "react";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Success from "./components/Success";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </>
  );
}

export default App;
