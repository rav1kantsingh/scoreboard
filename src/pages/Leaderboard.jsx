import React from "react";
import LeaderboardListItem from "../component/LeaderboardListItem";
import firebase from '../utils/firebase';

export default class Leaderboard extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    const dataRef = firebase.database().ref('data');
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