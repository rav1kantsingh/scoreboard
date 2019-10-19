import React from 'react';
import ScoreCard from '../component/ScoreCard';
import Leaderboard from '../component/Leaderboard';
import firebase from '../utils/firebase';

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      event: "SOLO-DANCING"
    }
  }

  componentDidMount() {
    const dataRef = firebase.database().ref(this.state.event+'/JUDGES');
    dataRef.on('value', snapshot => {

      var dataList = [];

      const dataObject = snapshot.val();
      var i = 3;
      for (var key in dataObject) {
        var singleeObj = {};
        if(i<=0){
          singleeObj['judge_id'] = key;
          singleeObj['score'] = '?';
          console.log('?');
        }
        else{
          singleeObj['judge_id'] = key;
          singleeObj['score'] = dataObject[key];
          console.log(dataObject[key]);
        }
        i--;
        dataList.push(singleeObj);
       
      }
      this.setState({
        data: dataList
      })
    })

  }

  render() {
    return (
      <div className='main-page'>
        <div className='ranking'>
          <Leaderboard event_name={this.state.event}/>
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