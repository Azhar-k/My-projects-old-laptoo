import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Person.css';
import Aux from '../../../hoc/Aux'
import withClass from '../../../hoc/withClass';
import Persons from '../Persons';
import classes from './Person.css';

class Person extends Component{

    componentDidMount(){
        this.inputElement.focus();
    }

    render(){
        console.log("[Person.js] rendering... ")
        return (
            <Aux className="Person">
                <h3 onClick={this.props.click}>I am {this.props.name}</h3> 
                <p>{this.props.children}</p>  
                <input ref={(inputEl)=>{this.inputElement=inputEl}} onChange={this.props.changed} value={this.props.name}></input>         
            </Aux>
        )    
    }
   
}

Person.propTypes={
    click: propTypes.func,
    name: propTypes.string,
    age: propTypes.number,
    changed:propTypes.func
};

export default withClass(Person,classes.Person);