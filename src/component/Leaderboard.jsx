import React from "react";
import LeaderboardListItem from "./LeaderboardListItem";
import firebase from '../utils/firebase';

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      event: this.props.event_name
    }
  }

  componentDidMount() {
    const dataRef = firebase.database().ref(this.state.event+'/leaderboard');
    dataRef.on('value', snapshot => {
      var dataList = [];

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
      <div className='event-name'>{this.state.event}</div>
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