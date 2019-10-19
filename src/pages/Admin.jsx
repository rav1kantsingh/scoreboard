import React from 'react';
import AdminScoreCard from '../component/AdminScoreCard';
import Leaderboard from '../component/Leaderboard';
import Contestants from '../component/Contestants';
import firebase from '../utils/firebase';

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      branch: '',
      event: '',
      data: [],
      index: '',
      read:0
    }
  }

  componentDidMount() {
    const dataRef = firebase.database().ref('performers');
    dataRef.on('value', snapshot => {
      const dataObject = snapshot.val();
      const dataList = Object.keys(dataObject).map(key => ({
        ...dataObject[key],
      }));

      this.setState({
        data: dataList
      })
    })

    //reading current total score of branch.
    const totalScore = firebase.database().ref('/total-score'+ this.state.branch);
    totalScore.on('value', snapshot => {
      const dataObject = snapshot.child(this.state.branch).val();
      this.setState({
        read: dataObject
      })
    })
    
  }

  handleSubmitClicked = (score) => {
    this.updateDB(score);
  }

  updateDB = (score) => {
    const key = firebase.database().ref().child('temp').push().key;
    const updates = {};
    console.log(this.state.read)

    return firebase.database().ref().update(updates);
  }

  handleClick = (index) => {
    this.setState({
      name: this.state.data[index].name,
      branch: this.state.data[index].branch,
      event: this.state.data[index].event,
      index: index
    })
  }

  render() {
    return (
      <div className='main-page'>
        <div className='ranking'>
          <Leaderboard />
        </div>
        <div className='main'>
          <div className='card-container'>
            <h2 className='details'>{this.state.name}</h2>
            <h3 className='details'>{this.state.branch}</h3>
            <h3 className='details'>{this.state.event}</h3>
            <AdminScoreCard data={this.state.data} handleSubmitClicked={this.handleSubmitClicked} />
          </div>
        </div>
        <div className='contestants'>
          <Contestants data={this.state.data} handleClick={this.handleClick} />
        </div>
      </div>
    )
  }
}