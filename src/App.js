import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Main from './pages/Main';
import Play from './pages/Play';
import End from './pages/End';

function App() {
  const [header, setHeader] = useState(true);
  const [result, setResult] = useState(true)

  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Main header={header} setHeader={setHeader} result={result} setResult={setResult}/>
        </Route>
        <Route path='/play'>
          <Play header={header} setHeader={setHeader} result={result} setResult={setResult}/>
        </Route>
        <Route path='/end'>
          <End />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;