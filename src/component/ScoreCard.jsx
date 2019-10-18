import React from "react";

export default class ScoreCard extends React.Component {
    constructor() {
        super();
        this.state = {
            score: 0
        }
    }

    render() {
        return (
            <div className='card'>
                <div className='circle'>
                    <span>{this.props.score}</span>}
                </div>
                <h2>PERFORMANCE</h2>
                <p id='desc'>{this.props.desc}</p>
                <div>
                    <p id='crit'>{this.props.judge}</p>
                </div>
            </div>
        )
    }
}