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

  componentDidMount() {
    var dataList = [];
    const dataRef = firebase.database().ref('total-score');
    dataRef.on('value', snapshot => {
      const dataObject = snapshot.val();
      console.log("aman", dataObject);
      for (var key in dataObject) {
        var singleeObj = {};
        singleeObj['branch'] = key;
        singleeObj['score'] = dataObject[key];
        dataList.push(singleeObj);
      }
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
          {this.state.data.map((item, index) => {
            return <div><LeaderboardListItem rank={index + 1} key={index + 1} branch={item.branch} score={item.score} /></div>
          })}
        </ul>
      </div>
    )
  }
}