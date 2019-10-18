import React from "react";

export default class ContestantItem extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'SUNDAR PICHAI',
            event: 'DEVELOPMENT',
            state: 1,
            branch: 'METL'
        }
    }
    render() {
        return (
            <div className='cListitem'>
                <div className='cMarker'></div>
                <div className='cVertical'>
                    <div id='cName'>{this.state.name}</div>
                    <div id='cEvent'>{this.state.event}</div>

                </div>
                <div className='cBranch'>{this.state.branch}</div>
               
            </div>
        )
    }
}