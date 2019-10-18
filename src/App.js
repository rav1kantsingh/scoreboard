import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Admin from './pages/Admin';
import ContestantItem from './component/ContestantItem';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={MainPage}/>
          <Route path='/admin' component={Admin}/>
          <Route path='/contestant' component={ContestantItem}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
