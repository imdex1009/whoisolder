import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import Play from "./pages/Play";
import End from "./pages/End";

function App() {
  const [header, setHeader] = useState(true);
  // header = whoisolder, result
  const [result, setResult] = useState(true);
  // result = great, cheerup
  const [score, setScore] = useState(0);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main
            header={header}
            setHeader={setHeader}
            result={result}
            setResult={setResult}
          />
        </Route>
        <Route path="/play">
          <Play
            header={header}
            setHeader={setHeader}
            result={result}
            setResult={setResult}
            score={score}
            setScore={setScore}
          />
        </Route>
        <Route path="/end">
          <End score={score} setScore={setScore} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
