import React from 'react';

const Cockpit = (props) =>{
    console.log("[Cockpit] rendering... ")
    return (
        <div>
            <h1>{props.title}</h1>
            <button className={props.cls} onClick={props.click}>click here</button>
        
        </div>
    )
}

export default Cockpit;