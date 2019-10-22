
  import React from 'react';
import firebase from '../utils/firebase';
import { resolve } from 'url';

export default class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  componentDidMount() {
   
  }
  updateSoloSinging = (node) => {
    
    const updates = {};
    updates['j1'] = 0;
    updates['j2'] = 0;
    updates['j3'] = 0;
    updates['j4'] = 0;
    updates['j5'] = 0;
    updates['j6'] = 0;

    return firebase.database().ref('/'+node + '/' + "JUDGES").update(updates);
  }

  
  render() {
    return (
      <div className='admin-page2'>
        <div className='superButton'><button style={{ height: 50, marginTop:10}} onClick={() => this.updateSoloSinging('SOLO_SINGING')}>SOLO SINGING</button></div>
        <div className='superButton'><button style={{ height: 50, marginTop:10}} onClick={() => this.updateSoloSinging('DUET_SINGING')}>DUET SINGING</button></div>
        <div className='superButton'><button style={{ height: 50, marginTop:10}} onClick={() => this.updateSoloSinging('SOLO_DANCING')}>SOLO DANCING</button></div>
        <div className='superButton'><button style={{ height: 50, marginTop:10}} onClick={() => this.updateSoloSinging('GROUP_DANCING')}>GROUP DANCING</button></div>
        <div className='superButton'><button style={{ height: 50, marginTop:10}} onClick={() => this.updateSoloSinging('POETRY')}>POETRY</button></div>
        <div className='superButton'><button style={{ height: 50, marginTop:10}} onClick={() => this.updateSoloSinging('STANDUP')}>STANDUP</button></div>
        <div className='superButton'><button style={{ height: 50, marginTop:10}} onClick={() => this.updateSoloSinging('HINDI_DEBATE')}>HINDI DEBATE</button></div>
        <div className='superButton'><button style={{ height: 50, marginTop:10}} onClick={() => this.updateSoloSinging('ENGLISH_DEBATE')}>ENGLISH DEBATE</button></div>

      </div>
    )
  }
}