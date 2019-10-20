import React from "react";

export default class ContestantItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : this.props.data,
            rank : parseInt(this.props.pos)+1,
            total : this.props.sum
        }
    }
    render() {

        return (
                <div className='fListitem'>
                <div id='fRank'>{parseInt(this.props.pos)+1}</div>
                <div id='fBranch'>{this.props.data.branch}</div>
                <div id='fGold'>{this.props.data.gold}</div>
                <div id='fSilver'>{this.props.data.silver}</div>
                <div id='fBronze'>{this.props.data.bronze}</div>
                <div id='fTotal'>{this.props.data.total}</div>
                <div className='fMarker'></div>
            
               
            </div>
        )
    }
}