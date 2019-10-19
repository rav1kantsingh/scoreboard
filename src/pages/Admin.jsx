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
      // console.log("dataobject:",dataObject);
      const dataList = Object.keys(dataObject).map(key => ({
        ...dataObject[key],
      }));
      // console.log("dataList:",dataList);

      this.setState({
        data: dataList

      })
    })

    //reading current total score of branch.
    const totalScore = firebase.database().ref('/total-score');
    totalScore.on('value', snapshot => {
      const dataObject = snapshot.val();
      this.setState({
        read: dataObject
      })
    })
    
  }

  handleSubmitClicked = (score) => {
    this.updateDB(score);
    this.updateBRANCH(score);
    this.updateEVENT(score);
    this.updateJUDGE(score);
  }

  updateDB = (score) => {
   
    const updates = {};
    updates[this.state.index+1+"/judge1"] = score;
    console.log(this.state.read)
    return firebase.database().ref('/performers').update(updates);
  }
  updateBRANCH = (score) => {
    var oldScore = 0;
    firebase.database().ref('/total-score/'+this.state.branch).on('value', function(snapshot) {
      // console.log("old",snapshot.val());
      oldScore = (parseInt(snapshot.val()));
  });
   
    //update branch score
    const updates={};
    updates["/"+this.state.branch] = score+oldScore;
    // console.log(this.state.read)
    return firebase.database().ref('/total-score').update(updates);
  
  
  }
  updateEVENT = (score) => {
    var oldScore = 0;
    firebase.database().ref('/'+this.state.event+'/'+this.state.branch).on('value', function(snapshot) {
      console.log("old",snapshot.val());
      oldScore = (parseInt(snapshot.val()));
  });
   
    //update branch score
    const updates={};
    updates["/"+this.state.branch] = score+oldScore;
    console.log(this.state.read)
    return firebase.database().ref('/'+this.state.event).update(updates);
  
  
  }
  updateJUDGE = (score) => {
    var oldScore = 0;
    firebase.database().ref('/'+'JUDGE'+'/'+this.state.branch).on('value', function(snapshot) {
      console.log("old",snapshot.val());
      oldScore = (parseInt(snapshot.val()));
  });
   
    //update branch score
    const updates={};
    updates["/"+this.state.branch] = score+oldScore;
    console.log(this.state.read)
    return firebase.database().ref('/'+this.state.event).update(updates);
  
  
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
      <div className='admin-page'>
        <div className='ranking'>
        <Contestants data={this.state.data} handleClick={this.handleClick} />
        </div>
        <div className='main'>
          <div className='card-container'>
            <h2 className='details'>{this.state.name}</h2>
            <h3 className='details'>{this.state.branch}</h3>
            <h3 className='details'>{this.state.event}</h3>
            <AdminScoreCard data={this.state.data} handleSubmitClicked={this.handleSubmitClicked} />
          </div>
        </div>
      </div>
    )
  }
}