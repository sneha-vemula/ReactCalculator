import React from "react";

class InputComponent extends React.Component {

    constructor(props){
        super();
    }

    render(){
        return (
        <div>
            <input style ={size} type="text" name="textarea" value={this.props.current} onChange = {() =>{}}/>
        </div>);
    }
  
}

var size = {
    height: 100,
    width: 600,
    fontSize: 60,
    padding: 5,
    backgroundColor: "#006699",
    color: "#fff"
};

export default InputComponent;