import React from "react";

export default class LeaderboardListItem extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className='listItem'>
                <div id='marker'></div>
                <div id='rank'>{this.props.rank}</div>
                <div id='branch'>{this.props.branch}</div>
                <div className='scoreBox'>
                    <div id='score'>{this.props.score}</div>
                </div>
            </div>
        )
    }
}