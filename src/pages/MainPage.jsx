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
    const dataRef = firebase.database().ref('');
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
            {this.state.data.map((item,index) => {
              return <ScoreCard desc={item.desc} key={index+1} judge={item.judgeName} score={item.score} />
            })}
          </div></div>
        </div>
      </div>
    )
  }
}