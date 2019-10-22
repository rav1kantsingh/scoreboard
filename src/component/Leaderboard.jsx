import React from "react";
import LeaderboardListItem from "./LeaderboardListItem";
import firebase from '../utils/firebase';

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      event: this.props.event_name
    }
  }

  componentDidMount() {


    firebase.database().ref('JUDGES_COUNT/').
      on('value', snapshot1 => {
         var judgeCount = parseFloat(snapshot1.val());
         console.log("JUDGECOUNT",judgeCount);
       

        console.log('EVENT', this.state.event)
        const dataRef = firebase.database().ref(this.state.event + '/branches/');
        dataRef.on('value', snapshot => {

          var dataList = [];
          console.log(snapshot)

          const dataObject = snapshot.val();
          console.log("aman", dataObject);
          for (var branch in dataObject) {
            var singleeObj = {};
            console.log('BRANCH',branch)

            singleeObj['branch'] = branch;
            var i = judgeCount;
            var total = 0;
            // console.log('branch', branch)
            for (var judge in dataObject[branch]) {
               console.log(judge)
              if(i<=0)
                break;
              i--;

              console.log(branch, 'ran', i);
              console.log(judge);
              total+=parseFloat(dataObject[branch][judge]);
            }



            singleeObj['score'] = total;
            dataList.push(singleeObj);
          }
          this.setState({
            data: dataList
          })
        })



      });





  }

  render() {
    this.state.data.sort((a, b) => b.score - a.score);
    return (

      <div className="listbox">
        <div className='event-name'>{this.state.event}</div>
        <div id='title'>LEADERBOARD</div>

        <ul>
          {this.state.data.map((item, index) => {
            return <div><LeaderboardListItem rank={index + 1} key={index + 1} branch={item.branch} score={item.score} /></div>
          })}
        </ul>
      </div>
    )
  }
}