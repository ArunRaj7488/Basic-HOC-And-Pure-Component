import React, { Component } from 'react';
import OriginalComp from './RegComp';
import PureComp from './PureComp';

class ParentCopm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : "Arun"
        }
    }
    componentDidMount = () => {
        setInterval(() => {
            this.setState({ name: "Arun"})
        }, 1000)
    }
    render() {
        const { name} = this.state;
        return (
            <div>
           <PureComp name={name}/> 
           <hr />
           <OriginalComp name={name} />
           </div>
        );
    }
}

export default ParentCopm;
