import React, { Component } from 'react';

const withCounter = (WrappedComponent, counter, name) => {
    class WithCounter extends Component {
        constructor(props){
            super(props);
            this.state={
                count: 0
            }
        }
        increamentHandler = () => {
            this.setState({ count: this.state.count + counter})
        }
        render() {
            const {count} = this.state;
            return (
                < WrappedComponent name={name} 
                count = {count} 
                increamentHandler={this.increamentHandler} 
                {...this.props}
                />
            );
        }
    }
    
    return WithCounter;

}

export default withCounter;