import React from "react";

export default class ContestantItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {

        return (
            <div className='hListitem'>
                <div id='hRank'>RANK</div>
                <div id='hBranch'>BRANCH</div>
                <div id='hGold'>GOLD</div>
                <div id='hSilver'>SILVER</div>
                <div id='hBronze'>BRONZE</div>
                <div id='hTotal'>TOTAL</div>
            </div>
        )
    }
}