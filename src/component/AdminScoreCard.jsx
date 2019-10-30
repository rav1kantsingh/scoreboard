import React from "react";
import InputField from './InputField';

export default class ScoreCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: 0,
            value2: 0,
            value3: 0,
            value4: 0,
            value5: 0,
            crit1: '',
            crit2: '',
            crit3: '',
            crit4: '',
            crit5: '',
            crit6: '',
            clicked: false,
            clear: 0
        }
    }
    showAlert = () => {
        window.alert('Your response has been recorded.\nThank You');
    }

    fitCriterias = () => {
        if (this.props.event === 'SOLO_DANCING'||'GROUP_DANCING') {
            this.setState({
                crit1 : 'Choreography & Creativity',
                crit2 : 'Rhythm',
                crit3 : 'Costume',
                crit4 : 'Space Utilization',
                crit5 : 'Overall Impression',
            })
        }
        else if (this.props.event === 'SOLO_SINGING') {
            this.setState({
                crit1 : 'Voice Quality',
                crit2 : 'Rhythm',
                crit3 : 'Expressions/Emotions',
                crit4 : 'Clarity of Lyrics',
                crit5 : '-',
            })
        }
        else if (this.props.event === 'DUET_SINGING') {
            this.setState({
                crit1 : 'Voice Quality',
                crit2 : 'Rhythm',
                crit3 : 'Expressions/Emotions',
                crit4 : 'Clarity of Lyrics',
                crit5 : 'Coordination',
            })
        }
        else if (this.props.event === 'STANDUP') {
            this.setState({
                crit1 : 'Concept',
                crit2 : 'Originality',
                crit3 : 'Expression',
                crit4 : 'Confidence',
                crit5 : 'Crowd Reaction',
            })
        }
        else if (this.props.event === 'POETRY') {
            this.setState({
                crit1 : 'Concept',
                crit2 : 'Originality',
                crit3 : 'Expression',
                crit4 : 'Confidence',
                crit5 : 'Clarity of spoken words',
            })
        }
        else if (this.props.event === 'ENGLISH_DEBATE' || 'HINDI_DEBATE') {
            this.setState({
                crit1 : 'Understanding of Topic',
                crit2 : 'Substance / Content',
                crit3 : 'Organization & Clarity',
                crit4 : 'Use of facts/statistics',
                crit5 : 'Confidence',
            })
        }
    }

    changeValues = (valueName, value) => {
        console.log(parseInt(value));
        if (parseInt(value) < 0 || parseInt(value) > 10) {
            window.alert('Enter score between 1 and 10');
            console.log()
            return;

        }
        if (valueName === 'value1') {
            this.setState({
                value1: value,
            })
        } if (valueName === 'value2') {
            this.setState({
                value2: value,
            })
        } if (valueName === 'value3') {
            this.setState({
                value3: value,
            })
        } if (valueName === 'value4') {
            this.setState({
                value4: value,
            })
        } if (valueName === 'value5') {
            this.setState({
                value5: value,
            })
        }
    }

    render() {
        return (
            <div className='a-card'>
                {this.fitCriterias()}
                <div className='horizontal-holder'>
                    <h2 id='score-criteria'>{this.state.crit1}</h2>
                    <div className='inputScore'>
                        <InputField field='value1' changeValues={this.changeValues} />
                    </div>
                </div>
                <div className='horizontal-holder'>
                    <h2 id='score-criteria'>{this.state.crit2}</h2>
                    <div className='inputScore'>
                        <InputField field='value2' changeValues={this.changeValues} />
                    </div>
                </div>
                <div className='horizontal-holder'>
                    <h2 id='score-criteria'>{this.state.crit3}</h2>
                    <div className='inputScore'>
                        <InputField field='value3' changeValues={this.changeValues} />
                    </div>
                </div>
                <div className='horizontal-holder'>

                    <h2 id='score-criteria'>{this.state.crit4}</h2>
                    <div className='inputScore'>
                        <InputField field='value4' changeValues={this.changeValues} />
                    </div>
                </div>
                <div className='horizontal-holder'>
                    {this.state.crit5 === '-' ?
                        <div className='rough'></div>
                        :
                        <div className='horizontal-holder'>
                            <h2 id='score-criteria'>{this.state.crit5}</h2>

                            <div className='inputScore'>

                                <InputField field='value5' changeValues={this.changeValues} />
                            </div>
                        </div>
                    }
                </div>
                <button className='button' onClick={() => { this.showAlert(); this.props.handleSubmitClicked(parseFloat(this.state.value1) + parseFloat(this.state.value2) + parseFloat(this.state.value3) + parseFloat(this.state.value4) + parseFloat(this.state.value5)); this.setState({ clicked: true }) }}>SUBMIT</button>
            </div>
        )
    }
}