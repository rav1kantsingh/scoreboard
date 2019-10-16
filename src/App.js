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
          <Route path='/' component={MainPage}/>
          <Route path='/leaderboardListItem' component={LeaderboardListItem}/>
          <Route path='/leaderboard' component={Leaderboard}/>
          <Route path='/admin' component={Leaderboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
