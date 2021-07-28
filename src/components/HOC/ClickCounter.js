import React, { Component } from 'react';
import withCounter from './withCounter';


class ClickCounter extends Component {
    render() {
        const {count, increamentHandler, name, value} = this.props
        return (
            <div style={ {margin: '30px'}}>
                <button onClick={increamentHandler}>{name} Clicked {count} time value is {value}</button>
            </div>
        );
    }
}

export default withCounter(ClickCounter, 5, "Arun");