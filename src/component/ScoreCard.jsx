import React from "react";

export default class ScoreCard extends React.Component {
    constructor() {
        super();
        this.state = {
            score: 10,
            title: 'PERFORMANCE',
            desc: 'The expressibility and uniqueness of the act',
            crit: 'RAVIKANT SINGH'
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
                <div>
                <p id='crit'>{this.state.crit}</p>
                </div>
            </div>
        )
    }
}