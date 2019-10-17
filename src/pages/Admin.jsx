import React from 'react';
import ScoreCard from '../component/ScoreCard';
import Leaderboard from '../component/Leaderboard';
import Contestants from '../component/Contestants';

export default class MainPage extends React.Component {

    render() {
        return (
            <div id='main-page'>
                <div className='ranking'>
                    <Leaderboard />
                </div>
                <div className='main'>
                    <div className='card-container'>
                        <ScoreCard editable='true' />
                    </div>
                </div>
                <div className='contestants'>
                    <Contestants />
                </div>
            </div>
        )
    }
}