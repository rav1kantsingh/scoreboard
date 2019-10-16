import React from 'react';
import ScoreCard from '../component/ScoreCard';
import Leaderboard from '../component/Leaderboard';

export default class MainPage extends React.Component {
    render() {
        return (
            <div id='main-page'>
                <div className='ranking'>
                <Leaderboard />
                </div>
                <div className = 'main'>
                    <div className = 'card-container'>
                    <ScoreCard />
                    <ScoreCard />
                    <ScoreCard />
                    </div>
                </div>
            </div>
        )
    }
}