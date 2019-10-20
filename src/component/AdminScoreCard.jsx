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
        }
    }

    changeValues = (valueName, value) => {
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
                <div className='horizontal-holder'>
                    <h2 id='score-criteria'>PERFORMANCE</h2>
                    <div className='inputScore'>
                        <InputField field='value1' changeValues={this.changeValues} />
                    </div>
                </div>
                <div className='horizontal-holder'>
                    <h2 id='score-criteria'>PERFECTION</h2>
                    <div className='inputScore'>
                        <InputField field='value2' changeValues={this.changeValues} />
                    </div>
                </div>
                <div className='horizontal-holder'>
                    <h2 id='score-criteria'>UNIQUENESS</h2>
                    <div className='inputScore'>
                        <InputField field='value3' changeValues={this.changeValues} />
                    </div>
                </div>
                <div className='horizontal-holder'>

                    <h2 id='score-criteria'>EXPRESSIONS</h2>
                    <div className='inputScore'>
                        <InputField field='value4' changeValues={this.changeValues} />
                    </div>
                </div>
                <div className='horizontal-holder'>
                    <h2 id='score-criteria'>PERFECTION</h2>
                    <div className='inputScore'>
                        <InputField field='value5' changeValues={this.changeValues} />
                    </div>
                </div>
                <button className='button' onClick={() => this.props.handleSubmitClicked(parseInt(this.state.value1) + parseInt(this.state.value2) + parseInt(this.state.value3) + parseInt(this.state.value4) + parseInt(this.state.value5))}>SUBMIT</button>
            </div>
        )
    }
}