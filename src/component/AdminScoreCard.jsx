import React from "react";

export default class ScoreCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: 'Based on uniqueness, creativity and expressibility',
            active: (props.locked && props.active) || false,
            value1: props.value1 || "",
            value2: props.value2 || "",
            value3: props.value3 || "",
            value4: props.value4 || "",
            value5: props.value5 || "",
            error: props.error || "",
            label: props.label || "Score"
        }
    }

    changeValue(event) {
        const value = event.target.value;
        this.setState({ value, error: "" });
    }

    handleKeyPress(event) {
        if (event.which === 13) {
            this.setState({ value: this.props.predicted });
        }
    }

    render() {
        const { active, value1,value2,value3,value4,value5, error, label } = this.state;
        const { predicted, locked } = this.props;
        const fieldClassName = `field ${(locked ? active : active || value1) &&
            "active"} ${locked && !active && "locked"}`;

        return (
            <div className='a-card'>
                <div className='horizontal-holder'>
                    <h2 id='score-criteria'>PERFORMANCE</h2>
                    <div className='inputScore'>
                        <div className={fieldClassName}>
                            {active &&
                                value1 &&
                                predicted &&
                                predicted.includes(value1) && <p className="predicted">{predicted}</p>}
                            <input
                                id={1}
                                type="text"
                                value1={value1}
                                placeholder={label}
                                onChange={this.changeValue.bind(this)}
                                onKeyPress={this.handleKeyPress.bind(this)}
                                onFocus={() => !locked && this.setState({ active: true })}
                                onBlur={() => !locked && this.setState({ active: false })}
                            />
                            <label htmlFor={1} className={error && "error"}>
                                {error || label}
                            </label>
                        </div>
                    </div>
                </div>
                <div className='horizontal-holder'>
                <h2 id='score-criteria'>PERFECTION</h2>
                <div className='inputScore'>
                    <div className={fieldClassName}>
                        {active &&
                            value2 &&
                            predicted &&
                            predicted.includes(value2) && <p className="predicted">{predicted}</p>}
                        <input
                            id={2}
                            type="number"
                            value2={value2}
                            placeholder={label}
                            onChange={this.changeValue.bind(this)}
                            onKeyPress={this.handleKeyPress.bind(this)}
                            onFocus={() => !locked && this.setState({ active: true })}
                            onBlur={() => !locked && this.setState({ active: false })}
                        />
                        <label htmlFor={1} className={error && "error"}>
                            {error || label}
                        </label>
                    </div>
                </div>
            </div>
            <div className='horizontal-holder'>
            <h2 id='score-criteria'>UNIQUENESS</h2>
            <div className='inputScore'>
                <div className={fieldClassName}>
                    {active &&
                        value3 &&
                        predicted &&
                        predicted.includes(value3) && <p className="predicted">{predicted}</p>}
                    <input
                        id={3}
                        type="text"
                        value3={value3}
                        placeholder={label}
                        onChange={this.changeValue.bind(this)}
                        onKeyPress={this.handleKeyPress.bind(this)}
                        onFocus={() => !locked && this.setState({ active: true })}
                        onBlur={() => !locked && this.setState({ active: false })}
                    />
                    <label htmlFor={1} className={error && "error"}>
                        {error || label}
                    </label>
                </div>
            </div>
        </div>
        <div className='horizontal-holder'>
        
        <h2 id='score-criteria'>EXPRESSIONS</h2>
        <div className='inputScore'>
            <div className={fieldClassName}>
                {active &&
                    value4 &&
                    predicted &&
                    predicted.includes(value4) && <p className="predicted">{predicted}</p>}
                <input
                    id={4}
                    type="text"
                    value4={value4}
                    placeholder={label}
                    onChange={this.changeValue.bind(this)}
                    onKeyPress={this.handleKeyPress.bind(this)}
                    onFocus={() => !locked && this.setState({ active: true })}
                    onBlur={() => !locked && this.setState({ active: false })}
                />
                <label htmlFor={1} className={error && "error"}>
                    {error || label}
                </label>
            </div>
        </div>
    </div>
    <div className='horizontal-holder'>
    <h2 id='score-criteria'>PERFECTION</h2>
    <div className='inputScore'>
        <div className={fieldClassName}>
            {active &&
                value5 &&
                predicted &&
                predicted.includes(value5) && <p className="predicted">{predicted}</p>}
            <input
                id={5}
                type="text"
                value5={value5}
                placeholder={label}
                onChange={this.changeValue.bind(this)}
                onKeyPress={this.handleKeyPress.bind(this)}
                onFocus={() => !locked && this.setState({ active: true })}
                onBlur={() => !locked && this.setState({ active: false })}
            />
            <label htmlFor={1} className={error && "error"}>
                {error || label}
            </label>
        </div>
    </div>
</div>
 <button onClick={() => {console.log(this.state.value1)}}>SUBMIT</button>

{
                // <button onClick={() => this.props.handleSubmitClicked(parseInt(this.state.value))}>SUBMIT</button>
          }          </div>
        )
    }
}