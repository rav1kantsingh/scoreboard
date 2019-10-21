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
      judge_id: '',
      isSelected: false,
      isAuthenticated: false,
      hideGradeCard: false
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

      // console.log('data', this.state.data)
    })


  }
  handleClick = (index) => {
    // console.log('click' + index)
    this.setState({
      isSelected: true
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
    updates[this.state.index + "/" + this.state.judge_id] = score;
    // console.log(this.state.read)
    return firebase.database().ref('/performers/').update(updates);
  }
  updateBRANCH = (score) => {


    //update branch score
    const updates = {};
    updates[this.state.judge_id] = score;
    console.log(this.state.read)
    return firebase.database().ref('/' + this.state.event + '/branches/' + this.state.branch ).update(updates);


  }
  updateEVENT = (score) => {

    //update event score
    const updates = {};
    updates[this.state.judge_id] = score;
    // console.log(this.state.read)
    return firebase.database().ref('/' + this.state.event + '/' + "JUDGES").update(updates);


  }

  updateLEADERBOARD = (score) => {
    var oldScore = 0;

    //console.log('route', '/' + this.state.event + '/' + "leaderboard/");
    firebase.database().ref('/' + this.state.event + '/' + "leaderboard/" + '/' + this.state.branch).
      once('value', snapshot => {

        // console.log("old Value", snapshot.val());
        oldScore = (parseInt(snapshot.val()));
        // this.updateLEADER2(score,oldScore);
        const updates = {};
        updates[this.state.branch] = score + oldScore;
        // console.log('route', '/' + this.state.event + '/' + "leaderboard/", updates);
        firebase.database().ref('/' + this.state.event + '/' + "leaderboard/").update(updates, () => {
          // console.log("Update Successfull");
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
  updateLEADER2 = (score, oldScore) => {


  }

  hideGradeCard = (e) => {
    if(e===true){
      window.alert('This participant has already been judged.')
    }
    this.setState({
      hideGradeCard: e
    })
  }

  changeValues = (value) => {
    // console.log('pass', value)
    this.setState({
      value: value,
    })
  }

  checkAuth = (password) => {
    // console.log('password', password);
    if (password == 'j1@ecc') {
      // console.log('PASSED')

      this.setState({
        judge_id: 'j1',
        isAuthenticated: true

      });

    }
    else if (password === 'j2@ecc') {
      // console.log('PASSED2s')

      this.setState({
        isAuthenticated: true,
        judge_id: 'j2'
      });
    }
    else if (password === 'j3@ecc') {
      this.setState({
        isAuthenticated: true,
        judge_id: 'j3'
      });
    }
    else if (password === 'j4@ecc') {
      this.setState({
        isAuthenticated: true,
        judge_id: 'j4'
      });
    }
    else if (password === 'j5@ecc') {
      this.setState({
        isAuthenticated: true,
        judge_id: 'j5'
      });
    }
    else if (password === 'j6@ecc') {
      this.setState({
        isAuthenticated: true,
        judge_id: 'j6'
      });
    }
    // console.log('pwd corr', this.state.judge_id)
  }
  _handleKeyDown = (e) => {
    this.checkAuth(this.state.value);

  }
  render() {
    return (
      <div className='admin-page2'>
        {this.state.isAuthenticated ? <div className={'card-container'}>
        <div className='admin-page'>
        <div className='ranking'>
        <Contestants  judge_id={this.state.judge_id} data={this.state.data} handleClick={this.handleClick} hideGradeCard={this.hideGradeCard}/>
      </div>
      <div className='main'>
        <div className='details1'>{this.state.name}</div>
        <div className='details2'>{this.state.branch}</div>
        <div className='details3'>{this.state.event}</div>
        {this.state.isSelected && !this.state.hideGradeCard ? <AdminScoreCard event = {this.state.event} data={this.state.data} handleSubmitClicked={this.handleSubmitClicked} /> : null}
      </div>



    </div></div>
         :
         <div className='password-page'>
          <div className='login'>
            <div id="login-text">Enter your Judge ID provided</div>
            <div id="password">  <PasswordField changeValues={this.changeValues} onKeyPress={event => {
              if (event.key === 'Enter') {
                this.checkAuth(this.state.value);
              }
            }} />  </div>
            <div id="pwd_submit"> <button onClick={() => this.checkAuth(this.state.value)}
            >SUBMIT</button></div>
          </div>
          </div>
        }
      </div>
    )
  }
}