import React from "react";
import ContestantItem from "./ContestantItem";

export default class Contestants extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedIndex : -1,
    }
  }

  changeSelectedIndex = (index) => {
    this.setState({
      selectedIndex: index
    })
  }

  render() {
    return (
      <div className="listbox">
      <div id='title' >CONTESTANTS</div>
          {this.props.data.map((item,index) => {
            return <ContestantItem index = {index} handleClick={this.props.handleClick} isSelected={this.state.selectedIndex==index} changeSelectedIndex={this.changeSelectedIndex} item={item} />
          })}
      </div>
    )
  }
}