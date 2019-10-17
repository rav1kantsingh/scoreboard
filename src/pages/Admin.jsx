import React from 'react';
import ScoreCard from '../component/ScoreCard';
import Leaderboard from '../component/Leaderboard';

export default class MainPage extends React.Component {

    // handleResponse = (data) => {
    //     var responseData = {
    //         ...data
    //     };

    //     // Get a key for a new Post.
    //     var newPostKey = firebase.database().ref().child('posts').push().key;

    //     // Write the new post's data simultaneously in the posts list and the user's post list.
    //     var updates = {};
    //     updates['/posts/' + newPostKey] = postData;
    //     updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    //     return firebase.database().ref().update(updates);
    // }

render() {
    return (
        <div id='main-page'>
            <div className='ranking'>
                <Leaderboard />
            </div>
            <div className='main'>
                <div className='card-container'>
                    <ScoreCard />
                    <ScoreCard />
                    <ScoreCard />
                </div>
            </div>
        </div>
    )
}
}