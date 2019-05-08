import React from "react";
import "../styles/ButtonAreaStyles.css";

class ButtonArea extends React.Component {

    render(){
        var numbers = [1,2,3,4,5,6,7,8,9,0,"."];
        numbers = numbers.map(number => {
           return <button className ="leftDiv buttonStyle" value = {number} onClick={(event) =>{this.props.handleClick(event)}}>{number}</button>
        })
        var operators = ["*","/","+","-"];
        operators = operators.map(operator => {
           return <button className ="rightDiv buttonStyle" value = {operator} onClick={(event) =>{this.props.handleClick(event)}}>{operator}</button>
        })
        
        return (
            <div className="outerDiv">
                <div className="leftDiv">
                    {numbers}
                    <button className ="leftDiv buttonStyle" value = "=" onClick={(event) =>{this.props.handleResultClick(event)}}>=</button>
                </div>

                <div className="rightDiv">
                    <button className ="rightDiv buttonStyle" value = "delete" onClick={(event) =>{this.props.handleClearClick(event)}}>clear</button>
                    {operators}
                </div>
            </div>);
    }
}

export default ButtonArea;