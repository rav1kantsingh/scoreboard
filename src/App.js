import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Admin from './pages/Admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={MainPage}/>
          <Route path='/admin' component={Admin}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
