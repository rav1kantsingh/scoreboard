import React from "react";
// place holder card replace with ListItem
import ListItem from '../component/ScoreCard';
import firebase from '../firebase';
 
export default class Leaderboard extends React.Component {
    writeUserData = (userId, name, email, imageUrl) => {
        firebase.database().ref('users/' + userId).set({
          username: name,
          email: email,
          profile_picture : imageUrl,
        });
      }
    render() {
        return (
            <div className='listview'>
                <button onClick={() => this.writeUserData('ravvi','ravi','@gmail','skdjksl')}>Click to Push</button>
            </div>
        )
    }
}