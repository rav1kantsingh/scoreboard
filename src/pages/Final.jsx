import React from "react";
import LeaderboardListItem from "../component/Final_leaderboard_item";
import LeaderHeader from '../component/HeaderFinalLeaderboard';
import firebase from '../utils/firebase';

export default class Final extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      total: 0
    }
  }

  componentDidMount() {
    const dataRef = firebase.database().ref('CROWNS');
    dataRef.on('value', snapshot => {
      var dataList = [];

      const dataObject = snapshot.val();
      console.log("aman", dataObject);
      for (var key in dataObject) {
        var singleeObj = {};
        this.setState({
          total: 0
        })
        console.log(key);
        singleeObj['branch'] = key;
        for (var data in dataObject[key]) {
          singleeObj[data] = dataObject[key][data];
          if (data === 'gold')
            this.setState({
              total: this.state.total + parseInt(dataObject[key][data]) * 3
            })
          if (data === 'silver')
          this.setState({
            total: this.state.total + parseInt(dataObject[key][data]) * 2
          })
          if (data === 'bronze')
          this.setState({
            total: this.state.total + parseInt(dataObject[key][data]) * 1
          })
          singleeObj['total'] = this.state.total;
          console.log(key, this.state.total);
        }
        dataList.push(singleeObj);
      }
      this.setState({
        data: dataList

      })
    })
  }

  render() {
    this.state.data.sort((a, b) => b.total - a.total);

    return (

      <div className="final_listbox">
        <div id='final_title'>LEADERBOARD</div>

        <ul>
          <div><LeaderHeader></LeaderHeader></div>
          {this.state.data.map((item, index) => {
            console.log("xxx", item);
            console.log('amanaamana');

            return <div><LeaderboardListItem pos={index} data={item} /></div>
          })}
        </ul>
      </div>
    )
  }
}