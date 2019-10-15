import React from "react";

export default class ScoreCard extends React.Component {
    constructor() {
        super();
        this.state = {
            score: 10,
            title: 'I am Ravikant Singh',
            desc: 'I am student of computer science and engineering and I am studying in NIT Patna',
            crit: 'CSE'
        }
    }
    render() {
        return (
            <div className='card'>
                <div className='circle'>
                    <span>{this.state.score}</span>
                </div>
                <h2>{this.state.title}</h2>
                <p id='desc'>{this.state.desc}</p>
                <p id='crit'>{this.state.crit}</p>
            </div>
        )
    }
}