import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SoloDancing from './pages/SoloDancing';
import SoloSinging from './pages/SoloSinging';
import Admin from './pages/Admin';
import ContestantItem from './component/ContestantItem';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/overall' component={MainPage}/>
          <Route path='/solo-dancing' component={SoloDancing}/>
          <Route path='/solo-singing' component={SoloSinging}/>
          <Route path='/group-dancing' component={MainPage}/>
          <Route path='/duet-singing' component={MainPage}/>
          <Route path='/standup' component={MainPage}/>
          <Route path='/poetry' component={MainPage}/>
          <Route path='/hindi-debate' component={MainPage}/>
          <Route path='/english-debate' component={MainPage}/>

          <Route path='/admin' component={Admin}/>
          <Route path='/contestant' component={ContestantItem}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
