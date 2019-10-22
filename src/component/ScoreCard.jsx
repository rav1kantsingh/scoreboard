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
                    <span>{this.props.score}</span>
                </div>
            </div>
        )
    }
}