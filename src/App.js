import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Main from './page/Main';
import Notice from './page/Notice';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/notice" component={Notice} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;