import React,{ PureComponent } from "react";
class PureComp extends PureComponent {
    render(){
        const { name } = this.props;
        console.log("Pure Component", name);
        return(
            <div>
                <h1>Pure Component</h1>
            </div>
        )
    }
}

export default PureComp;