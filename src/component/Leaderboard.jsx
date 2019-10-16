import React from "react";
import LeaderboardListItem from "./LeaderboardListItem";

export default class Leaderboard extends React.Component {
  constructor() {
      super();
      this.state={
        data: [
          {rank:1, branch: 'CSE', score: 52},
          {rank:2, branch: 'MECH', score: 45},
          {rank:3, branch: 'CIVIL', score: 42},
          {rank:4, branch: 'ARCH', score: 33},
          {rank:5, branch: 'ECE', score: 25}
      ] 
     }     
  }

    render() {
      return (
        <div className="listbox">
          <ul>
            <div><LeaderboardListItem rank ={this.state.data[0].rank} branch = {this.state.data[0].branch} score = {this.state.data[0].score}/></div>
            <div><LeaderboardListItem rank ={this.state.data[1].rank} branch = {this.state.data[1].branch} score = {this.state.data[1].score}/></div>
            <div><LeaderboardListItem rank ={this.state.data[2].rank} branch = {this.state.data[2].branch} score = {this.state.data[2].score}/></div>
            <div><LeaderboardListItem rank ={this.state.data[3].rank} branch = {this.state.data[3].branch} score = {this.state.data[3].score}/></div>
            <div><LeaderboardListItem rank ={this.state.data[4].rank} branch = {this.state.data[4].branch} score = {this.state.data[4].score}/></div>            
          </ul>
        </div>
      )
    }
  }
  