import React from "react";

export default class ContestantItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isSelected: this.props.isSelected,
            color:'red',
            selectedColor: 'yellow',
            commpletedColor: 'blue'
        }
    }

    render() {
        const item = this.props.item
        return (
            <div className='cListitem' onClick={() => {this.props.changeSelectedIndex(this.props.index); this.props.handleClick(this.props.index); }}>
                <div className={ (this.props.isSelected ? 'red ' : 'yellow ') + ' cMarker'}></div>
                <div className='cVertical'>
                    <div id='cName'>{item.name}</div>
                    <div id='cEvent'>{item.event}</div>

                </div>
                <div className='cBranch'>{item.branch}</div>
               
            </div>
        )
    }
}