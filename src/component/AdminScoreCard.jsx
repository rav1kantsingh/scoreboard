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
        console.log('changeValues',valueName,value)
        this.setState({
            valueName: value,
        })
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
                <button onClick={() => { console.log('value of 1',this.state.value1) }}>SUBMIT</button>

                {
                    // <button onClick={() => this.props.handleSubmitClicked(parseInt(this.state.value))}>SUBMIT</button>
                }          </div>
        )
    }
}