import React from "react";

export default class LeaderboardListItem extends React.Component {
    constructor() {
        super();
        this.state = {
            rank: 1,
            score: 10,
            branch: 'CIVIL'
        }
    }
    render() {
        return (
            <div className='listItem'>
                    <div id='rank'>{this.props.rank}</div>
                    <div id='branch'>{this.props.branch}</div>
                    <div className='scoreBox'>
                        <div id='score'>{this.props.score}</div>
                    </div>
            </div>
        )
    }
}