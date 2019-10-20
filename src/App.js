import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SoloDancing from './pages/SoloDancing';
import SoloSinging from './pages/SoloSinging';
import GroupDancing from './pages/GroupDancing';
import DuetSinging from './pages/DuetSinging';
import StandUp from './pages/StandUp';
import Poetry from './pages/Poetry';
import HindiDebate from './pages/HindiDebate';
import EnglishDebate from './pages/EnglishDebut';
import Admin from './pages/Admin';
import ContestantItem from './component/ContestantItem';
import FinalItemView from './component/Final_leaderboard_item';
import FinalLeaderboard from './pages/Final';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path='/overall' component={MainPage}/> */}
          <Route path='/solo-dancing' component={SoloDancing}/>
          <Route path='/solo-singing' component={SoloSinging}/>
          <Route path='/group-dancing' component={GroupDancing}/>
          <Route path='/duet-singing' component={DuetSinging}/>
          <Route path='/standup' component={StandUp}/>
          <Route path='/poetry' component={Poetry}/>
          <Route path='/hindi-debate' component={HindiDebate}/>
          <Route path='/english-debate' component={EnglishDebate}/> 

          <Route path='/admin' component={Admin}/>
          <Route path='/contestant' component={ContestantItem}/>
          <Route path='/final' component={FinalLeaderboard}/>

          <Route path='/finalitem' component={FinalItemView}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
