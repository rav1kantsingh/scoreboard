import React from "react";

export default class ScoreCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: 'Based on uniqueness, creativity and expressibility',
            active: (props.locked && props.active) || false,
            value: props.value || "",
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
        const { active, value, error, label } = this.state;
        const { predicted, locked } = this.props;
        const fieldClassName = `field ${(locked ? active : active || value) &&
            "active"} ${locked && !active && "locked"}`;

        return (
            <div className='card'>
                <div className='inputScore'>
                    <div className={fieldClassName}>
                        {active &&
                            value &&
                            predicted &&
                            predicted.includes(value) && <p className="predicted">{predicted}</p>}
                        <input
                            id={1}
                            type="text"
                            value={value}
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
                <h2>PERFORMANCE</h2>
                <p id='desc'>{this.state.desc}</p>
                <div>
                    <p id='crit'>{this.props.judge}</p>
                </div>
                <button onClick={() => this.props.handleSubmitClicked(this.state.value)}>SUBMIT</button>
            </div>
        )
    }
}