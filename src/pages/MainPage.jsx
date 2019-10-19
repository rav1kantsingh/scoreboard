import React from 'react';
import ScoreCard from '../component/ScoreCard';
import Leaderboard from '../component/Leaderboard';
import firebase from '../utils/firebase';

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    var dataList = [];
    const dataRef = firebase.database().ref('JUDGES');
    dataRef.on('value', snapshot => {
      const dataObject = snapshot.val();
      // console.log("aman", dataObject);
        snapshot.forEach(function (childSnapshot) {
          var singleeObj = {};

          singleeObj['judge_id'] = childSnapshot.key;
          singleeObj['judge_name'] = childSnapshot.val()['name'];
          singleeObj['judge_content'] = childSnapshot.val()['contents'];
          singleeObj['score'] = childSnapshot.val()['score'];
          console.log("1", childSnapshot.val()['name']);
          console.log("1", childSnapshot.val()['contents']);
          console.log("1", childSnapshot.val()['score']);

          dataList.push(singleeObj);

        });
        console.log("aman", dataList);
      
      this.setState({
        data: dataList
      })
    })

  }

  render() {
    return (
      <div className='main-page'>
        <div className='ranking'>
          <Leaderboard />
        </div>
        <div className='main'>
          <div className='web-header'>
            <div className='web-title1'>ECCENTRICA</div>
            <div className='web-title2'>3.0</div>
          </div>
          <div id='scores'>
            <div id='card-title'>Judges Scores</div>
            <div className='card-container'>
              {this.state.data.map((item, index) => {
                return <ScoreCard desc={item.judge_content} key={index + 1} judge={item.judge_name} score={item.score} />
              })}
            </div></div>
        </div>
      </div>
    )
  }
}