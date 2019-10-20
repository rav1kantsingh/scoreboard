import React from "react";
import ContestantItem from "./ContestantItem";

export default class Contestants extends React.Component {
  render() {
    return (
      <div className="listbox">
      <div id='title' >CONTESTANTS</div>
          {this.props.data.map((item,index) => {
            return <div onClick={() => this.props.handleClick(index)} key={index}><ContestantItem  name={item.name} branch={item.branch} event={item.event}  /></div>
          })}
      </div>
    )
  }
}