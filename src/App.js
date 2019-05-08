import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import InputComponent from './components/InputComponent';
import ButtonArea from './components/ButtonArea';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      result:"",
      input1:"",
      input2:"",
      operator:"",
      current:""
    }
  }

  handleClick = (event) =>{
    var targetValue  = event.target.value;
    this.setState((prevState) =>{
      var input1 = "";var input2 = "";var result = "";
      if(this.isOperator(targetValue)){
        if(prevState.input1 !== "") {
          console.log("operator:",targetValue);
          return { operator: targetValue, current: prevState.input1+targetValue };
        }
        else {
          console.log("operator:"," ---- ");
          return { operator: ""};
        }
      }
      console.log("not an operator");
      if(prevState.operator === ""){
        if(prevState.input1 === ""){
          input1= targetValue;
        } else {
          input1 = prevState.input1 + targetValue;
        }
        console.log("input1",input1);
        return {input1: input1, current: input1};
      } 

     if(prevState.input2 === ""){
          input2= targetValue;
        } else {
          input2 = prevState.input2 + targetValue;
        }
        console.log("input2",input2);
        return {input2: input2, current: this.state.input1+this.state.operator+ input2};
    })
    
  }

  isOperator= (input) =>{
    var operators = ["*","/","+","-"];
    return operators.includes(input);
  }

  handleClearClick = () =>{
    this.setState({
      result:"",
      input1:"",
      input2:"",
      operator:"",
      current:""
    });
  }

  handleResultClick = (event) => {
    var result1 = "";
    console.log("in handle result click");
    if(this.state.operator !== "" && this.state.input1 !== "" && this.state.input2 !== ""){
      switch(this.state.operator){
        case "*":
        console.log(this.state.input1, "  ", this.state.input2);
          result1 = this.state.input1 * this.state.input2;
          break;
        case "/":
          result1 = this.state.input1 / this.state.input2;
          break;
        case "+":
          result1 = parseInt(this.state.input1) + parseInt(this.state.input2);
          break;
        case "-":
          result1 = this.state.input1 - this.state.input2;
          break;
      }
    } else if( this.state.input1 !== ""){
      result1 = this.state.input1;
    }
    this.setState((prevState) =>{
     return { 
      result: result1,
      input1:"",
      input2:"",
      operator:"",
      current: prevState.input1+ prevState.operator+prevState.input2 +"="+result1
     }
    });
  }

  render (){
        return (
          <div className="App">
            <Header/>
            <InputComponent current = {this.state.current}/>
            <ButtonArea handleClick = {this.handleClick} handleResultClick = {this.handleResultClick} handleClearClick = {this.handleClearClick}/>
          </div>
        );
    }
}

export default App;
