import React from 'react';
import AdminScoreCard from '../component/AdminScoreCard';
import Contestants from '../component/Contestants';
import PasswordField from '../component/PasswordField';
import firebase from '../utils/firebase';
import { resolve } from 'url';

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      branch: '',
      event: '',
      data: [],
      index: '',
      read: 0,
      judge_id: 'j1',
      isSelected:false,
      isAuthenticated:false
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

      console.log('data',this.state.data)
    })


  }
  handleClick = (index) => {
    console.log('click' + index)
    this.setState({
      isSelected:true
    })
    this.setState({
      name: this.state.data[index].name,
      branch: this.state.data[index].branch,
      event: this.state.data[index].event,
      index: index
    })
  }

  handleSubmitClicked = (score) => {
    this.updateDB(score);
    this.updateBRANCH(score);
    this.updateEVENT(score);
    this.updateLEADERBOARD(score);
    // this.updateJUDGE(score);
  }

  updateDB = (score) => {

    const updates = {};
    updates[this.state.index + 1 + "/" + this.state.judge_id] = score;
    console.log(this.state.read)
    return firebase.database().ref('/performers/').update(updates);
  }
  updateBRANCH = (score) => {


    //update branch score
    const updates = {};
    updates[this.state.judge_id] = score;
    console.log(this.state.read)
    return firebase.database().ref('/' + this.state.event + '/' + this.state.branch + '/JUDGES').update(updates);


  }
  updateEVENT = (score) => {

    //update event score
    const updates = {};
    updates[this.state.judge_id] = score;
    console.log(this.state.read)
    return firebase.database().ref('/' + this.state.event + '/' + "JUDGES").update(updates);


  }

  updateLEADERBOARD = (score) => {
    var oldScore = 0;

    //console.log('route', '/' + this.state.event + '/' + "leaderboard/");
    firebase.database().ref('/' + this.state.event + '/' + "leaderboard/" + '/' + this.state.branch).
    once('value', snapshot => {
      
      console.log("old Value", snapshot.val());
      oldScore = (parseInt(snapshot.val()));
      // this.updateLEADER2(score,oldScore);
      const updates = {};
      updates[this.state.branch] = score + oldScore;
      console.log('route', '/' + this.state.event + '/' + "leaderboard/",updates);
      firebase.database().ref('/' + this.state.event + '/' + "leaderboard/").update(updates, () => {
        console.log("Update Successfull");
      });
    });
    
    // firebase.database().ref('/' + this.state.event + '/' + "leaderboard/" + '/' + this.state.branch).on('value', function (snapshot) {
    //   console.log("old", snapshot.val());
    //   oldScore = (parseInt(snapshot.val()));
    //   // this.updateLEADER2(score,oldScore);
    //   console.log('inside');
    // },function(error){
    //   if(error){

    //   }
    //   else{
    //     const updates = {};
    //     updates[this.state.branch] = score + oldScore;
    //     // console.log(this.state.read)
    //     console.log('outside');
    //     return firebase.database().ref('/' + this.state.event + '/' + "leaderboard/").update(updates);
    //   }
    // });



   
  }
  updateLEADER2 = (score,oldScore) => {
    
   
  }
 
  changeValues = (value) => {
    console.log('pass',value)
        this.setState({
            value: value,
        })
    }

    checkAuth = (password) =>{
      console.log('password',password);
        if(password=='j1@ecc'){
          this.state.isAuthenticated = true;
          this.state.judge_id = 'j1';
        }
        else  if(password=='j2@ecc'){
          this.state.isAuthenticated = true;
          this.state.judge_id = 'j2';
        }
        else  if(password=='j3@ecc'){
          this.state.isAuthenticated = true;
          this.state.judge_id = 'j3';
        }
        else  if(password=='j4@ecc'){
          this.state.isAuthenticated = true;
          this.state.judge_id = 'j4';
        }
        else  if(password=='j5@ecc'){
          this.state.isAuthenticated = true;
          this.state.judge_id = 'j5';
        }
        else  if(password=='j6@ecc'){
          this.state.isAuthenticated = true;
          this.state.judge_id = 'j6';
        }
    }
    _handleKeyDown = (e) => {
        this.checkAuth(this.state.value);
      
    }
  render() {
    return (
      <div className='admin-page'>
        <div className='ranking'>
          <Contestants judge_id = {this.state.judge_id} data={this.state.data} handleClick={this.handleClick} />
        </div>
        <div className='main'>
        {this.state.isAuthenticated ? <div className={'card-container'}>
        <h2 className='details'>{this.state.name}</h2>
        <h3 className='details'>{this.state.branch}</h3>
        <h3 className='details'>{this.state.event}</h3>
        {this.state.isSelected ? <AdminScoreCard data={this.state.data} handleSubmitClicked={this.handleSubmitClicked} /> : null}
      </div> :
        <div className='login'>
        <div id="login-text">Enter your Judge ID provided</div>
        <div id="password">  <PasswordField  changeValues={this.changeValues} onKeyPress={event => {
          if (event.key === 'Enter') {
            this.checkAuth(this.state.value);
          }
        }} />  </div>
        <div id="pwd_submit"> <button onClick={() => this.checkAuth(this.state.value)}>SUBMIT</button></div>
        </div>
    }
          
        </div>
      </div>
    )
  }
}