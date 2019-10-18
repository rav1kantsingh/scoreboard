import React from "react";

export default class ContestantItem extends React.Component {
    render() {
        return (
            <div className='cListitem'>
                <div className='cMarker'></div>
                <div className='cVertical'>
                    <div id='cName'>{this.props.name}</div>
                    <div id='cEvent'>{this.props.event}</div>

                </div>
                <div className='cBranch'>{this.props.branch}</div>
               
            </div>
        )
    }
}