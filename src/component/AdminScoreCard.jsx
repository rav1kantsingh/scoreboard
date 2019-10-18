import React from "react";
import firebase from '../utils/firebase';
import TextInput from './TextInput';

export default class ScoreCard extends React.Component {
    constructor() {
        super();
        this.state = {
            score: 0
        }
    }

    handleChange = (event) => {
        this.setState({ score: event.target.value });
    }

    handleSubmit = (event) => {
        this.updateDB(this.state.score);
        event.preventDefault();
    }

    updateDB = (score) => {
        const key = firebase.database().ref().child('temp').push().key;
        const updates = {};
        updates['/temp1/' + key] = score;
        updates['/temp2/' + key + '/' + key] = score;

        return firebase.database().ref().update(updates);
    }

    render() {
        return (
            <div className='card'>
                <div className='circle'>
                    <TextInput/>
                </div>
                <h2>PERFORMANCE</h2>
                <p id='desc'>{this.props.desc}</p>
                <div>
                    <p id='crit'>{this.props.judge}</p>
                </div>
                <button onClick = {this.handleSubmit}>SUBMIT</button>
            </div>
        )
    }
}