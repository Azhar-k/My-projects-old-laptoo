import React,{Component} from 'react';
import Person from './Person/Person';

class Persons extends Component  {

    render(){
        console.log("[]persons.js")
        return (this.props.persons.map((personItem, index) => {
        return <Person
            name={personItem.name}
            key={personItem.id}
            changed={(event) => { this.props.changed(event, personItem.id) }}
            click={() => { this.props.click(index) }}
        />
    }))

    }
    
       
}
export default Persons;