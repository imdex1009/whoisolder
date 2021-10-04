import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Main from './pages/Main'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Main />
        </Route>
        <Route path='/play'>
          <Play />
        </Route>
        <Route path='/end'>
          <End />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
