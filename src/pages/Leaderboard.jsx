import React from "react";
import LeaderboardListItem from "../component/LeaderboardListItem";
import firebase from '../firebase';

export default class Leaderboard extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        { rank: 1, branch: 'CSE', score: 52 },
        { rank: 2, branch: 'MECH', score: 45 },
        { rank: 3, branch: 'CIVIL', score: 42 },
        { rank: 4, branch: 'ARCH', score: 33 },
        { rank: 5, branch: 'ECE', score: 25 }
      ]
    }
  }

  render() {
    var database = firebase.database();
    return (
      <div className="listbox">
        <ul>
          {this.state.data.map(item => {
            return <div><LeaderboardListItem rank={item.rank} branch={item.branch} score={item.score} /></div>
          })}
        </ul>
      </div>
    )
  }
}
