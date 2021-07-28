import React,  { Component }from "react";
class RegComp extends Component {
    
    render(){
        const { name } = this.props;
        console.log("Regular Component", name);
        return (
            <div>
                <h1>Regular Component</h1>
            </div>
        )
    }
}

export default RegComp;