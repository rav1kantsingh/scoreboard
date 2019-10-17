import React from "react";
import LeaderboardListItem from "./LeaderboardListItem";
import firebase from '../utils/firebase';

export default class Leaderboard extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    const dataRef = firebase.database().ref('ranking');
    dataRef.on('value', snapshot => {
      const dataObject = snapshot.val();

      const dataList = Object.keys(dataObject).map(key => ({
        ...dataObject[key],
      }));

      this.setState({
        data: dataList
      })
    })
  }

  render() {
    this.state.data.sort((a, b) => b.score - a.score);
    return (
      
      <div className="listbox">
      <div id='title'>LEADERBOARD</div>

        <ul>
          {this.state.data.map((item,index) => {
            return <div><LeaderboardListItem  rank={index+1} branch={item.branch} score={item.score} /></div>
          })}
        </ul>
      </div>
    )
  }
}