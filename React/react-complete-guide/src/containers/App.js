import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';


class App extends Component {

  constructor(props){
    super(props);
    console.log("[app.js] constructor")

    this.state = {
      persons : [
        {name:"azhar",id:'1'},
        {name:"faris",id:'2'},
        {name:"Fasal",id:'3'}
      ],
      showPersons:true,
      nameChangeCounter:0
    }

  }
  static getDerivedStateFromProps(props,state){
    console.log("[app.js] gertDerivedStateFromProps")
    return state;
  }
  componentDidMount(){
    console.log("[App.js] componentDidMount")
  }



  deletePersonHandler = (index) =>{
    const persons=[...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons});
  }
  switchNameHandler = (newName) => {
    this.setState({persons : [
      {name:newName},
      {name:"faris new"},
      {name:"Fasal changed"}
    ]})
  }
  changeNameHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex((p)=>{
      if(p.id==id){
        console.log(p.id)
        return p.id;
      }
    })
    const person = {...this.state.persons[personIndex]}
    person.name=event.target.value;
    const persons=[... this.state.persons]
    persons[personIndex]=person

    this.setState(()=>{
      return {
        persons : persons,
        nameChangeCounter:this.state.nameChangeCounter+1
      }});
    
  }

  togglePersonNamesHandler = () => {
    const status=!this.state.showPersons;
    this.setState({
      showPersons:status
    }
      
    )
  }
  render() {

    console.log("[App.js] rendering... ")
    const style={
      backgroundColor:'green',
      border:'1px solid blue',
      marginTop:'10px'
    };

    let persons = null;
    
    if(this.state.showPersons){
      persons=(
        <div>
          <Persons persons={this.state.persons} click={this.deletePersonHandler} changed={this.changeNameHandler}/>
        </div>
        
      );
      style.backgroundColor='red';
    }
    
    return (
      <Aux>
        <Cockpit 
          title={this.props.appTitle} 
          cls={classes.button} 
          click={this.togglePersonNamesHandler}/>
        {persons}
      </Aux>
    );
  }
}



export default withClass(App,classes.App);
