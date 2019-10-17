import React from "react";
import firebase from '../utils/firebase';

export default class ScoreCard extends React.Component {
    constructor() {
        super();
        this.state = {
            score: 10,
            title: 'PERFORMANCE',
            desc: 'The expressibility and uniqueness of the act',
            crit: 'RAVIKANT SINGH',
            value: ''
        }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        this.updateDB(this.state.value);
        event.preventDefault();
    }

    updateDB = (value) => {
        const key = firebase.database().ref().child('temp').push().key;
        const updates = {};
        updates['/temp1/' + key] = value;
        updates['/temp2/' + key + '/' + key] = value;

        return firebase.database().ref().update(updates);
    }

    render() {
        const edit = this.props.editable;
        return (
            <div className='card'>
                <div className='circle'>
                    {edit ? <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                        <input type="submit" value="Submit" />
                    </form> : <span>{this.state.score}</span>}
                </div>
                <h2>{this.state.title}</h2>
                <p id='desc'>{this.state.desc}</p>
                <div>
                    <p id='crit'>{this.state.crit}</p>
                </div>
            </div>
        )
    }
}