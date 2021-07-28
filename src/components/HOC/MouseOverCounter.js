import React, { Component } from 'react';
import withCounter from './withCounter';

class MouseOverCounter extends Component {
    render() {
        const {count, increamentHandler, name, value} = this.props
        return (
            <div style={ {margin: '30px'}}>
                <h1 onMouseOver={increamentHandler}>{name} Clicked {count} time value is {value}</h1>
            </div>
        );
    }
}

export default withCounter(MouseOverCounter, 3, "Ajay");