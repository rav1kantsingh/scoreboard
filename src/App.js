import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LeaderBoard from './component/Leaderboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/scoreboard' component={MainPage}/>
          <Route path='/leaderboard' component={LeaderBoard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
