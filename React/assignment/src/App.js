import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';


class App extends Component {

  state = {
    userNames :[
      'Azhar',
      'Faris'
    ] 
  }
  changeUserNameHandler=(event)=>{
    this.setState( {
      userNames :[
        event.target.value,
        'Faris new' 
      ] 
    })
  }
  render() {
    return (
      <div className="App">
        
        <UserOutput userName={this.state.userNames[0]}></UserOutput>
        <UserInput userName={this.state.userNames[0]} click={this.changeUserNameHandler}></UserInput>
        
      </div>
    );
  }
}

export default App;
