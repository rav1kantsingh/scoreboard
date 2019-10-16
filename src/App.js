import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LeaderboardListItem from './component/LeaderboardListItem';
import Leaderboard from './component/Leaderboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/scoreboard' component={MainPage}/>
          <Route path='/LeaderboardListItem' component={LeaderboardListItem}/>
          <Route path='/Leaderboard' component={Leaderboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
