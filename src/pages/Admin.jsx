import React from 'react';
import AdminScoreCard from '../component/AdminScoreCard';
import Leaderboard from '../component/Leaderboard';
import Contestants from '../component/Contestants';

export default class MainPage extends React.Component {
    constructor(){
        super();
        this.state={
            name:'',
            branch:'',
            event:'',
        }
    }

    render() {
        return (
            <div id='main-page'>
                <div className='ranking'>
                    <Leaderboard />
                </div>
                <div className='main'>
                    <div className='card-container'>
                        <h2>{this.state.name}</h2>
                        <h3>{this.state.name}</h3>
                        <h3>{this.state.name}</h3>
                        <AdminScoreCard />
                    </div>
                </div>
                <div className='contestants'>
                    <Contestants />
                </div>
            </div>
        )
    }
}